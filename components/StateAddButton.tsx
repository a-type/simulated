import React, { FC, useState, useCallback, FormEvent } from 'react';
import {
  makeStyles,
  Theme,
  Button,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  ButtonProps,
} from '@material-ui/core';
import { graphql, useFragment } from 'react-relay/hooks';
import { StateAddButton_addStateMutation } from './__generated__/StateAddButton_addStateMutation.graphql';
import { StateAddButton_scenario$key } from './__generated__/StateAddButton_scenario.graphql';
import { ConnectionHandler } from 'relay-runtime';
import clsx from 'clsx';
import { useForm, FielderProvider } from 'fielder';
import TextField from './fields/TextField';
import useMutation from '../hooks/useMutation';

export interface StateAddButtonProps extends ButtonProps {
  scenario: StateAddButton_scenario$key;
  onAdd?: (scenarioId: string, stateId: string) => any;
}

const useStyles = makeStyles<Theme, StateAddButtonProps>(theme => ({}));

const addStateMutation = graphql`
  mutation StateAddButton_addStateMutation($input: AddScenarioStateInput!) {
    addScenarioState(input: $input) {
      stateEdge {
        node {
          id
          name
        }
        cursor
      }
    }
  }
`;

const scenarioFragment = graphql`
  fragment StateAddButton_scenario on Scenario {
    id
  }
`;

const StateAddButton: FC<StateAddButtonProps> = props => {
  const { onAdd, className, children, ...rest } = props;
  const classes = useStyles(props);

  const { id: scenarioId } = useFragment(scenarioFragment, props.scenario);

  const [mutate, loading] = useMutation<StateAddButton_addStateMutation>(
    addStateMutation,
    {
      onCompleted: ({ addScenarioState }) => {
        if (!onAdd) return;
        onAdd(scenarioId, addScenarioState.stateEdge.node.id);
      },
      updater: store => {
        const root = store.getRootField('addScenarioState');
        const edge = root.getLinkedRecord('stateEdge');
        const scenarioProxy = store.get(scenarioId);
        if (!scenarioProxy) return;
        const connection = ConnectionHandler.getConnection(
          scenarioProxy,
          'ScenarioStates_possibleStates',
        );
        if (!connection) return;
        ConnectionHandler.insertEdgeAfter(connection, edge);
      },
    },
  );

  const [showModal, setShowModal] = useState(false);

  const handleClick = useCallback(() => setShowModal(true), [setShowModal]);

  const form = useForm<{ name: string }>();

  const handleSubmit = useCallback(
    async (ev: FormEvent) => {
      ev.preventDefault();

      await mutate({
        variables: {
          input: {
            scenarioId,
            state: {
              name: form.fields.name.value || '',
            },
          },
        },
      });
      setShowModal(false);
    },
    [mutate, scenarioId, form, setShowModal],
  );

  return (
    <>
      <Button
        className={clsx(classes.root, className)}
        onClick={handleClick}
        {...rest}
      >
        {children}
      </Button>
      <Dialog open={showModal} onClose={() => setShowModal(false)}>
        <FielderProvider value={form}>
          <form onSubmit={handleSubmit}>
            <DialogTitle>Add state</DialogTitle>
            <DialogContent>
              <TextField name="name" label="Name" required />
            </DialogContent>
            <DialogActions>
              <Button type="submit">
                {loading ? <CircularProgress /> : children}
              </Button>
            </DialogActions>
          </form>
        </FielderProvider>
      </Dialog>
    </>
  );
};

export default StateAddButton;
