import React, { FC, ReactNode } from 'react';
import {
  makeStyles,
  Theme,
  Box,
  Divider,
  Typography,
  MenuItem,
  CircularProgress,
  Button,
} from '@material-ui/core';
import { graphql } from 'relay-hooks';
import useFormikSubmit from '../hooks/useFormikSubmit';
import { Formik } from 'formik';
import { TextField } from 'formik-material-ui';

export interface MappingEditorProps {
  initialValues?: any;
  onSubmit: (values: any) => void | Promise<void>;
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
    pathMatcher {
      kind
      ... on LiteralMatcher {
        value
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

const INITIAL_VALUES: any = {
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

const MappingEditor: FC<MappingEditorProps> = props => {
  const {
    initialValues = INITIAL_VALUES,
    onSubmit,
    buttonContents = 'Submit',
  } = props;
  const classes = useStyles(props);

  const handleSubmit = useFormikSubmit(onSubmit);

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ handleSubmit, isSubmitting }) => (
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
          <Divider className={classes.divider} />
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
          <Box display="flex" pt={2}>
            <Button type="submit" variant="contained">
              {isSubmitting ? <CircularProgress /> : buttonContents}
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default MappingEditor;
