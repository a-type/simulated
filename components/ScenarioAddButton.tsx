import React, { FC } from 'react';
import { makeStyles, Theme, Button, CircularProgress } from '@material-ui/core';
import { graphql, useMutation, useFragment } from 'relay-hooks';
import clsx from 'clsx';
import { ScenarioAddButton_addScenarioMutation } from './__generated__/ScenarioAddButton_addScenarioMutation.graphql';
import { ConnectionHandler } from 'relay-runtime';
import { ScenarioAddButton_viewer$key } from './__generated__/ScenarioAddButton_viewer.graphql';
import { useCallback } from 'react';

export interface ScenarioAddButtonProps {
  onAdd?: (scenario: any) => any;
  className?: string;
  viewer: ScenarioAddButton_viewer$key;
}

const useStyles = makeStyles<Theme, ScenarioAddButtonProps>(theme => ({
  root: {},
}));

const addScenarioMutation = graphql`
  mutation ScenarioAddButton_addScenarioMutation {
    addScenario(input: {}) {
      scenarioEdge {
        node {
          id
          name
        }
        cursor
      }
      scenario {
        id
      }
    }
  }
`;

const viewerFragment = graphql`
  fragment ScenarioAddButton_viewer on Viewer {
    id
  }
`;

const ScenarioAddButton: FC<ScenarioAddButtonProps> = props => {
  const { children, className, onAdd } = props;
  const classes = useStyles(props);

  const { id: viewerId } = useFragment<ScenarioAddButton_viewer$key>(
    viewerFragment,
    props.viewer,
  );

  const [mutate, { loading }] = useMutation<
    ScenarioAddButton_addScenarioMutation
  >(addScenarioMutation, {
    onCompleted: ({ addScenario }) => {
      if (!onAdd) return;
      onAdd(addScenario.scenario.id);
    },
    updater: store => {
      const edge = store
        .getRootField('addScenario')
        .getLinkedRecord('scenarioEdge');
      const viewerProxy = store.get(viewerId);
      const connection = ConnectionHandler.getConnection(
        viewerProxy,
        'ScenarioList_scenarios',
      );
      ConnectionHandler.insertEdgeAfter(connection, edge);
    },
  });

  const handleClick = useCallback(() => mutate({ variables: {} }), [mutate]);

  return (
    <Button className={clsx(classes.root, className)} onClick={handleClick}>
      {loading ? <CircularProgress /> : children}
    </Button>
  );
};

export default ScenarioAddButton;
