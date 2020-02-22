import React, { FC, ReactNode, useCallback } from 'react';
import {
  makeStyles,
  Theme,
  Box,
  Divider,
  Typography,
  MenuItem,
  CircularProgress,
  Button,
  FormControl,
  InputLabel,
} from '@material-ui/core';
import { graphql, useFragment } from 'relay-hooks';
import useFormikSubmit from '../hooks/useFormikSubmit';
import { Formik } from 'formik';
import { TextField, Select } from 'formik-material-ui';
import { toPolymorphicInput } from '../lib/inputTransformers';
import {
  MappingEditor_mapping,
  MappingEditor_mapping$key,
} from './__generated__/MappingEditor_mapping.graphql';
import SubmitButton from './SubmitButton';

export type MappingEditorResult = {
  methodMatcher: {
    literals?: {
      values: string[];
    };
  };
  pathMatcher: {
    literal?: {
      value: string;
    };
  };
  bodyMatcher: {
    literal?: {
      value: string;
    };
  };
  headersMatcher: {
    literals?: {
      values: {
        name: string;
        value?: string;
      }[];
    };
  };
  response: {
    body: {
      template?: {
        value: string;
      };
    };
  };
  priority: number;
};

export interface MappingEditorProps {
  mapping?: MappingEditor_mapping$key;
  onSubmit: (values: MappingEditorResult) => void | Promise<void>;
  buttonContents?: ReactNode;
}

const useStyles = makeStyles<Theme, MappingEditorProps>(theme => ({
  divider: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(1),
  },
}));

const mappingFragment = graphql`
  fragment MappingEditor_mapping on Mapping {
    id
    methodMatcher {
      kind
      ... on LiteralsMethodMatcher {
        values
      }
    }
    pathMatcher {
      kind
      ... on LiteralPathMatcher {
        value
      }
    }
    bodyMatcher {
      kind
      ... on LiteralBodyMatcher {
        value
      }
    }
    headersMatcher {
      kind
      ... on LiteralsHeadersMatcher {
        values {
          name
          value
        }
      }
    }
    response {
      body {
        kind
        ... on TemplateResponseBody {
          value
        }
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
`;

const INITIAL_VALUES: Omit<
  MappingEditor_mapping,
  'createdAt' | 'updatedAt' | 'id' | 'trigger' | ' $refType'
> = {
  methodMatcher: null,
  pathMatcher: null,
  bodyMatcher: null,
  headersMatcher: null,
  response: {
    body: {
      kind: 'Template',
      value: '{ "foo": "bar" }',
    },
  },
  priority: 0,
};

const MappingEditor: FC<MappingEditorProps> = props => {
  const { mapping: mappingKey, onSubmit, buttonContents = 'Submit' } = props;
  const classes = useStyles(props);

  const mapping = useFragment(mappingFragment, mappingKey);

  const processResult = useCallback(
    (values: typeof INITIAL_VALUES) =>
      onSubmit({
        methodMatcher: toPolymorphicInput(values.methodMatcher),
        pathMatcher: toPolymorphicInput(values.pathMatcher),
        bodyMatcher: toPolymorphicInput(values.bodyMatcher),
        headersMatcher: toPolymorphicInput(values.headersMatcher),
        response: {
          body: toPolymorphicInput(values.response?.body ?? null),
        },
        priority: values.priority,
      }),
    [onSubmit],
  );

  const handleSubmit = useFormikSubmit(processResult);

  return (
    <Formik initialValues={mapping || INITIAL_VALUES} onSubmit={handleSubmit}>
      {({ handleSubmit, isSubmitting, values, setFieldValue }) => (
        <form onSubmit={handleSubmit}>
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
          <Divider className={classes.divider} />
          <Box mb={2}>
            <Typography variant="h4">Request Matching</Typography>
            {values.methodMatcher ? (
              <Box display="flex">
                <TextField
                  select
                  disabled
                  name="methodMatcher.kind"
                  label="Method matcher type"
                  style={{ minWidth: 200 }}
                  variant="outlined"
                  margin="normal"
                >
                  <MenuItem value="Literals">Literals</MenuItem>
                </TextField>

                {/* TODO: configured based on matcher type */}
                <FormControl
                  fullWidth
                  style={{ minWidth: 200, marginLeft: 8 }}
                  margin="normal"
                  variant="outlined"
                >
                  <InputLabel variant="outlined">Exact methods</InputLabel>
                  <Select
                    name="methodMatcher.values"
                    fullWidth
                    variant="outlined"
                    multiple
                    labelWidth={110}
                  >
                    <MenuItem value="GET">GET</MenuItem>
                    <MenuItem value="POST">POST</MenuItem>
                    <MenuItem value="PUT">PUT</MenuItem>
                    <MenuItem value="DELETE">DELETE</MenuItem>
                    <MenuItem value="PATCH">PATCH</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            ) : (
              <Button
                type="button"
                onClick={() =>
                  setFieldValue('methodMatcher', {
                    kind: 'Literals',
                    values: [],
                  })
                }
              >
                Match method
              </Button>
            )}
            {values.pathMatcher ? (
              <Box display="flex">
                <TextField
                  select
                  disabled
                  name="pathMatcher.kind"
                  label="Path matcher type"
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
                  style={{ marginLeft: 8 }}
                />
              </Box>
            ) : (
              <Button
                type="button"
                onClick={() =>
                  setFieldValue('pathMatcher', {
                    kind: 'Literal',
                    value: '/foo',
                  })
                }
              >
                Match path
              </Button>
            )}
            {values.bodyMatcher ? (
              <Box display="flex">
                <TextField
                  select
                  disabled
                  name="bodyMatcher.kind"
                  label="Body matcher type"
                  style={{ minWidth: 200 }}
                  variant="outlined"
                  margin="normal"
                >
                  <MenuItem value="Literal">Literal</MenuItem>
                </TextField>
                <TextField
                  name="bodyMatcher.value"
                  label="Exact body"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  multiline
                  style={{ marginLeft: 8 }}
                />
              </Box>
            ) : (
              <Button
                type="button"
                onClick={() =>
                  setFieldValue('bodyMatcher', {
                    kind: 'Literal',
                    value: '{ "foo": "bar" }',
                  })
                }
              >
                Match body
              </Button>
            )}
          </Box>
          <Divider className={classes.divider} />
          <Box mb={2}>
            <Typography variant="h4">Response</Typography>
            <TextField
              select
              disabled
              name="response.body.kind"
              label="Response type"
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
          <Box display="flex" pt={2}>
            <SubmitButton variant="contained">{buttonContents}</SubmitButton>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default MappingEditor;
