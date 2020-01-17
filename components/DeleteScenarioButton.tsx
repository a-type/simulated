import React, { FC, useState, useCallback } from 'react';
import {
  makeStyles,
  Theme,
  ButtonProps,
  Button,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogActions,
} from '@material-ui/core';
import { graphql, useFragment, useMutation } from 'relay-hooks';
import { ConnectionHandler } from 'relay-runtime';
import { DeleteScenarioButton_deleteScenarioMutation } from './__generated__/DeleteScenarioButton_deleteScenarioMutation.graphql';
import { DeleteScenarioButton_viewer$key } from './__generated__/DeleteScenarioButton_viewer.graphql';
import { DeleteScenarioButton_scenario$key } from './__generated__/DeleteScenarioButton_scenario.graphql';

export interface DeleteScenarioButtonProps extends ButtonProps {
  viewer: DeleteScenarioButton_viewer$key;
  scenario: DeleteScenarioButton_scenario$key;
  onDelete?: () => any;
}

const useStyles = makeStyles<Theme, DeleteScenarioButtonProps>(theme => ({}));

const deleteScenarioMutation = graphql`
  mutation DeleteScenarioButton_deleteScenarioMutation(
    $input: DeleteScenarioInput!
  ) {
    deleteScenario(input: $input) {
      scenarioEdge {
        node {
          id
        }
        cursor
      }
    }
  }
`;

const viewerFragment = graphql`
  fragment DeleteScenarioButton_viewer on Viewer {
    id
  }
`;

const scenarioFragment = graphql`
  fragment DeleteScenarioButton_scenario on Scenario {
    id
    name
  }
`;

const DeleteScenarioButton: FC<DeleteScenarioButtonProps> = props => {
  const {
    onDelete,
    scenario: scenarioProp,
    viewer: viewerProp,
    children,
    ...rest
  } = props;
  const classes = useStyles(props);

  const { id: viewerId } = useFragment(viewerFragment, viewerProp);

  const { id: scenarioId, name: scenarioName } = useFragment(
    scenarioFragment,
    scenarioProp,
  );

  const [mutate, { loading }] = useMutation<
    DeleteScenarioButton_deleteScenarioMutation
  >(deleteScenarioMutation, {
    onCompleted: () => {
      if (!onDelete) return;
      onDelete();
    },
    updater: store => {
      try {
        const viewerProxy = store.get(viewerId);
        const connection = ConnectionHandler.getConnection(
          viewerProxy,
          'ScenarioList_scenarios',
        );
        ConnectionHandler.deleteNode(connection, scenarioId);
      } catch (err) {
        console.error(err);
      }
    },
  });

  const [showConfirm, setShowConfirm] = useState(false);

  const handleClick = useCallback(() => setShowConfirm(true), [setShowConfirm]);

  const handleCancel = useCallback(() => setShowConfirm(false), [
    setShowConfirm,
  ]);

  const handleConfirm = useCallback(async () => {
    await mutate({
      variables: {
        input: {
          scenarioId,
        },
      },
    });
    setShowConfirm(false);
  }, [mutate, scenarioId, setShowConfirm]);

  return (
    <>
      <Button {...rest} onClick={handleClick}>
        {loading ? <CircularProgress /> : children}
      </Button>
      <Dialog open={showConfirm}>
        <DialogTitle>Delete {scenarioName}?</DialogTitle>
        <DialogActions>
          <Button onClick={handleCancel}>No</Button>
          <Button variant="contained" onClick={handleConfirm}>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteScenarioButton;
