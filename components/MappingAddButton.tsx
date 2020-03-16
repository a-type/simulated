import React, { FC } from 'react';
import { makeStyles, Theme, Button, CircularProgress } from '@material-ui/core';
import { graphql, useFragment } from 'react-relay/hooks';
import clsx from 'clsx';
import { MappingAddButton_addMappingMutation } from './__generated__/MappingAddButton_addMappingMutation.graphql';
import { ConnectionHandler } from 'relay-runtime';
import { useCallback } from 'react';
import { MappingAddButton_state$key } from './__generated__/MappingAddButton_state.graphql';
import useMutation from '../hooks/useMutation';

export interface MappingAddButtonProps {
  onAdd?: (
    mapping: MappingAddButton_addMappingMutation['response']['addStateMapping']['mappingEdge']['node'],
  ) => any;
  className?: string;
  state: MappingAddButton_state$key;
}

const useStyles = makeStyles<Theme, MappingAddButtonProps>(theme => ({
  root: {},
}));

const addMappingMutation = graphql`
  mutation MappingAddButton_addMappingMutation($input: AddStateMappingInput!) {
    addStateMapping(input: $input) {
      mappingEdge {
        node {
          id
          priority
          matchers {
            kind
          }
        }
        cursor
      }
    }
  }
`;

const stateFragment = graphql`
  fragment MappingAddButton_state on State {
    id
  }
`;

const MappingAddButton: FC<MappingAddButtonProps> = props => {
  const { children, className, onAdd } = props;
  const classes = useStyles(props);

  const { id: stateId } = useFragment(stateFragment, props.state);

  const [mutate, loading] = useMutation<MappingAddButton_addMappingMutation>(
    addMappingMutation,
    {
      onCompleted: ({ addStateMapping }) => {
        if (!onAdd) return;
        onAdd(addStateMapping.mappingEdge.node);
      },
      updater: store => {
        const edge = store
          .getRootField('addStateMapping')
          .getLinkedRecord('mappingEdge');
        const viewerProxy = store.get(stateId);
        if (!viewerProxy) return;
        const connection = ConnectionHandler.getConnection(
          viewerProxy,
          'StateMappings_mappings',
        );
        if (!connection) return;
        ConnectionHandler.insertEdgeAfter(connection, edge);
      },
    },
  );

  const handleClick = useCallback(
    () =>
      mutate({
        variables: {
          input: {
            stateId,
            mapping: {
              priority: 0,
            },
          },
        },
      }),
    [mutate],
  );

  return (
    <Button className={clsx(classes.root, className)} onClick={handleClick}>
      {loading ? <CircularProgress /> : children}
    </Button>
  );
};

export default MappingAddButton;
