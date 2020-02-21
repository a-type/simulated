import React, { FC, useState, useCallback, FormEvent } from 'react';
import {
  makeStyles,
  Theme,
  Button,
  Box,
  Divider,
  MenuItem,
  Dialog,
  Typography,
  CircularProgress,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core';
import { graphql, useFragment, useMutation } from 'relay-hooks';
import { ConnectionHandler } from 'relay-runtime';
import { Formik } from 'formik';
import useFormikSubmit from '../hooks/useFormikSubmit';
import { AddMappingButton_state$key } from './__generated__/AddMappingButton_state.graphql';
import { AddMappingButton_addMappingMutation } from './__generated__/AddMappingButton_addMappingMutation.graphql';
import { TextField } from 'formik-material-ui';

export interface AddMappingButtonProps {
  state: AddMappingButton_state$key;
  onAdd?: (stateId: string, mappingId: string) => any;
}

type MappingCreateValues = {
  pathMatcher: MatcherCreateValues;
  response: {
    body: ResponseBodyCreateValues;
  };
  priority: string;
};

type MatcherCreateValues = {
  kind: 'Literal';
  value: string;
};

type ResponseBodyCreateValues = {
  kind: 'Template';
  value: string;
};

const INITIAL_VALUES: MappingCreateValues = {
  pathMatcher: {
    kind: 'Literal',
    value: '',
  },
  response: {
    body: {
      kind: 'Template',
      value: '{ "foo": "bar" }',
    },
  },
  priority: '0',
};

const useStyles = makeStyles<Theme, AddMappingButtonProps>(theme => ({}));

const addMappingMutation = graphql`
  mutation AddMappingButton_addMappingMutation($input: AddStateMappingInput!) {
    addStateMapping(input: $input) {
      mappingEdge {
        node {
          # TODO: find a better way to sync this with StateMappings component?
          id
          pathMatcher {
            kind
            ... on LiteralMatcher {
              value
            }
          }
          response {
            body {
              kind
            }
          }
          trigger {
            targetState {
              name
            }
          }
          priority
          createdAt
          updatedAt
        }
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
  const { onAdd, children } = props;
  const classes = useStyles(props);

  const { id: stateId } = useFragment(stateFragment, props.state);

  const [mutate, { loading }] = useMutation<
    AddMappingButton_addMappingMutation
  >(addMappingMutation, {
    onCompleted: ({ addStateMapping }) => {
      if (!onAdd) return;
      onAdd(stateId, addStateMapping.mappingEdge.node.id);
    },
    updater: store => {
      const root = store.getRootField('addStateMapping');
      const edge = root.getLinkedRecord('mappingEdge');
      const stateProxy = store.get(stateId);
      const connection = ConnectionHandler.getConnection(
        stateProxy,
        'StateMappings_mappings',
      );
      ConnectionHandler.insertEdgeAfter(connection, edge);
    },
  });

  const [showModal, setShowModal] = useState(false);

  const handleClick = useCallback(() => setShowModal(true), [setShowModal]);

  const save = useCallback(
    async (values: MappingCreateValues) => {
      await mutate({
        variables: {
          input: {
            stateId,
            mapping: {
              priority: parseInt(values.priority, 10),
              pathMatcher: toMatcherInput(values.pathMatcher),
              response: {
                body: toBodyInput(values.response.body),
              },
            },
          },
        },
      });
      setShowModal(false);
    },
    [mutate, setShowModal],
  );

  const handleSubmit = useFormikSubmit(save);

  return (
    <>
      <Button onClick={handleClick}>{children}</Button>
      <Dialog open={showModal} onClose={() => setShowModal(false)} fullWidth>
        <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <DialogTitle>Add mapping</DialogTitle>
              <DialogContent>
                <Box mb={2}>
                  <Typography variant="h4">Basics</Typography>
                  <TextField
                    type="number"
                    name="priority"
                    label="Priority"
                    variant="outlined"
                    margin="normal"
                  />
                </Box>
                <Divider />
                <Box mb={2}>
                  <Typography variant="h4">Path Matching</Typography>
                  <TextField
                    select
                    disabled
                    name="pathMatcher.kind"
                    label="Matcher type"
                    style={{ minWidth: 200 }}
                    variant="outlined"
                    margin="normal"
                  >
                    <MenuItem value="Literal">Literal</MenuItem>
                  </TextField>
                  {/* TODO: configured based on matcher type */}
                  <TextField
                    name="pathMatcher.value"
                    label="Exact path"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                  />
                </Box>
                <Divider />
                <Box mb={2}>
                  <Typography variant="h4">Response</Typography>
                  <TextField
                    select
                    disabled
                    name="response.body.kind"
                    label="Matcher type"
                    style={{ minWidth: 200 }}
                    variant="outlined"
                    margin="normal"
                  >
                    <MenuItem value="Template">Template</MenuItem>
                  </TextField>
                  {/* TODO: configured based on matcher type */}
                  <TextField
                    multiline
                    name="response.body.value"
                    label="Body template"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                  />
                </Box>
              </DialogContent>
              <DialogActions>
                <Button type="submit">
                  {loading ? <CircularProgress /> : children}
                </Button>
              </DialogActions>
            </form>
          )}
        </Formik>
      </Dialog>
    </>
  );
};

const toMatcherInput = ({ kind, ...rest }: MatcherCreateValues) => {
  if (kind === 'Literal') {
    return {
      literal: rest,
    };
  }

  return null;
};

const toBodyInput = ({ kind, ...rest }: ResponseBodyCreateValues) => {
  if (kind === 'Template') {
    return {
      template: rest,
    };
  }

  return null;
};

export default AddMappingButton;
