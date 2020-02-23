import React, { FC } from 'react';
import { makeStyles, Theme, Button, CircularProgress } from '@material-ui/core';
import { graphql, useMutation, useFragment } from 'relay-hooks';
import clsx from 'clsx';
import { AddMappingButton_addMappingMutation } from './__generated__/AddMappingButton_addMappingMutation.graphql';
import { ConnectionHandler } from 'relay-runtime';
import { useCallback } from 'react';
import { AddMappingButton_state$key } from './__generated__/AddMappingButton_state.graphql';

export interface AddMappingButtonProps {
  onAdd?: (
    mapping: AddMappingButton_addMappingMutation['response']['addStateMapping']['mappingEdge']['node'],
  ) => any;
  className?: string;
  state: AddMappingButton_state$key;
}

const useStyles = makeStyles<Theme, AddMappingButtonProps>(theme => ({
  root: {},
}));

const addMappingMutation = graphql`
  mutation AddMappingButton_addMappingMutation($input: AddStateMappingInput!) {
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
  fragment AddMappingButton_state on State {
    id
  }
`;

const AddMappingButton: FC<AddMappingButtonProps> = props => {
  const { children, className, onAdd } = props;
  const classes = useStyles(props);

  const { id: stateId } = useFragment(stateFragment, props.state);

  const [mutate, { loading }] = useMutation<
    AddMappingButton_addMappingMutation
  >(addMappingMutation, {
    onCompleted: ({ addStateMapping }) => {
      if (!onAdd) return;
      onAdd(addStateMapping.mappingEdge.node);
    },
    updater: store => {
      const edge = store
        .getRootField('addStateMapping')
        .getLinkedRecord('mappingEdge');
      const viewerProxy = store.get(stateId);
      const connection = ConnectionHandler.getConnection(
        viewerProxy,
        'StateMappings_mappings',
      );
      ConnectionHandler.insertEdgeAfter(connection, edge);
    },
  });

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

export default AddMappingButton;
