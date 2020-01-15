import React, { FC } from 'react';
import { makeStyles, Theme, Button, CircularProgress } from '@material-ui/core';
import { graphql, useMutation, useFragment } from 'relay-hooks';
import clsx from 'clsx';
import { AddScenarioButton_addScenarioMutation } from './__generated__/AddScenarioButton_addScenarioMutation.graphql';
import { ConnectionHandler } from 'relay-runtime';
import { AddScenarioButton_viewer$key } from './__generated__/AddScenarioButton_viewer.graphql';
import { useCallback } from 'react';

export interface AddScenarioButtonProps {
  onAdd?: (scenario: any) => any;
  className?: string;
  viewer: AddScenarioButton_viewer$key;
}

const useStyles = makeStyles<Theme, AddScenarioButtonProps>(theme => ({
  root: {},
}));

const addScenarioMutation = graphql`
  mutation AddScenarioButton_addScenarioMutation {
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
  fragment AddScenarioButton_viewer on Viewer {
    id
  }
`;

const AddScenarioButton: FC<AddScenarioButtonProps> = props => {
  const { children, className, onAdd } = props;
  const classes = useStyles(props);

  const { id: viewerId } = useFragment<AddScenarioButton_viewer$key>(
    viewerFragment,
    props.viewer,
  );

  const [mutate, { loading }] = useMutation<
    AddScenarioButton_addScenarioMutation
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

export default AddScenarioButton;
