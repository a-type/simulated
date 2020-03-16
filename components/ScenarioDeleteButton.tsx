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
import { graphql, useFragment } from 'react-relay/hooks';
import { ConnectionHandler } from 'relay-runtime';
import { ScenarioDeleteButton_deleteScenarioMutation } from './__generated__/ScenarioDeleteButton_deleteScenarioMutation.graphql';
import { ScenarioDeleteButton_viewer$key } from './__generated__/ScenarioDeleteButton_viewer.graphql';
import { ScenarioDeleteButton_scenario$key } from './__generated__/ScenarioDeleteButton_scenario.graphql';
import useMutation from '../hooks/useMutation';

export interface ScenarioDeleteButtonProps extends ButtonProps {
  viewer: ScenarioDeleteButton_viewer$key;
  scenario: ScenarioDeleteButton_scenario$key;
  onDelete?: () => any;
}

const useStyles = makeStyles<Theme, ScenarioDeleteButtonProps>(theme => ({}));

const deleteScenarioMutation = graphql`
  mutation ScenarioDeleteButton_deleteScenarioMutation(
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
  fragment ScenarioDeleteButton_viewer on Viewer {
    id
  }
`;

const scenarioFragment = graphql`
  fragment ScenarioDeleteButton_scenario on Scenario {
    id
    name
  }
`;

const ScenarioDeleteButton: FC<ScenarioDeleteButtonProps> = props => {
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

  const [mutate, loading] = useMutation<
    ScenarioDeleteButton_deleteScenarioMutation
  >(deleteScenarioMutation, {
    onCompleted: () => {
      if (!onDelete) return;
      onDelete();
    },
    updater: store => {
      try {
        const viewerProxy = store.get(viewerId);
        if (!viewerProxy) return;
        const connection = ConnectionHandler.getConnection(
          viewerProxy,
          'ScenarioList_scenarios',
        );
        if (!connection) return;
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

export default ScenarioDeleteButton;
