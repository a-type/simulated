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
import { graphql, useFragment, useMutation } from 'relay-hooks';
import { AddStateButton_addStateMutation } from './__generated__/AddStateButton_addStateMutation.graphql';
import { AddStateButton_scenario$key } from './__generated__/AddStateButton_scenario.graphql';
import { ConnectionHandler } from 'relay-runtime';
import clsx from 'clsx';
import { useForm, FielderProvider } from 'fielder';
import TextField from './fields/TextField';

export interface AddStateButtonProps extends ButtonProps {
  scenario: AddStateButton_scenario$key;
  onAdd?: (scenarioId: string, stateId: string) => any;
}

const useStyles = makeStyles<Theme, AddStateButtonProps>(theme => ({}));

const addStateMutation = graphql`
  mutation AddStateButton_addStateMutation($input: AddScenarioStateInput!) {
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
  fragment AddStateButton_scenario on Scenario {
    id
  }
`;

const AddStateButton: FC<AddStateButtonProps> = props => {
  const { onAdd, className, children, ...rest } = props;
  const classes = useStyles(props);

  const { id: scenarioId } = useFragment(scenarioFragment, props.scenario);

  const [mutate, { loading }] = useMutation<AddStateButton_addStateMutation>(
    addStateMutation,
    {
      onCompleted: ({ addScenarioState }: any) => {
        if (!onAdd) return;
        onAdd(addScenarioState.scenario.id, addScenarioState.stateEdge.node.id);
      },
      updater: store => {
        const root = store.getRootField('addScenarioState');
        const edge = root.getLinkedRecord('stateEdge');
        const scenarioProxy = store.get(scenarioId);
        const connection = ConnectionHandler.getConnection(
          scenarioProxy,
          'ScenarioStates_possibleStates',
        );
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
              name: form.fields.name.value,
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

export default AddStateButton;
