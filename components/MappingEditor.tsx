import React, { FC, ReactNode, useCallback } from 'react';
import {
  makeStyles,
  Theme,
  Box,
  Divider,
  Typography,
  MenuItem,
  TextField,
} from '@material-ui/core';
import { graphql, useFragment } from 'relay-hooks';
import { MappingEditor_mapping$key } from './__generated__/MappingEditor_mapping.graphql';
import AddMatcherWidget, { MatcherKind } from './AddMatcherWidget';
import EditMatcherWidget from './EditMatcherWidget';

export interface MappingEditorProps {
  mapping?: MappingEditor_mapping$key;
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
    matchers {
      ...EditMatcherWidget_matcher
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
    ...AddMatcherWidget_mapping
  }
`;

const MappingEditor: FC<MappingEditorProps> = props => {
  const { mapping: mappingKey } = props;
  const classes = useStyles(props);

  const mapping = useFragment(mappingFragment, mappingKey);
  const unusedMatcherKinds = [
    MatcherKind.methods,
    MatcherKind.path,
    MatcherKind.body,
    MatcherKind.headers,
  ].filter(
    kind => !mapping.matchers.some(matcher => matcher.kind === kind),
  ) as MatcherKind[];

  return (
    <Box>
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
        <Box mb={2}>
          {mapping.matchers.map(matcher => (
            <EditMatcherWidget matcher={matcher as any} key={matcher.kind} />
          ))}
        </Box>
        <AddMatcherWidget
          mapping={mapping}
          availableKinds={unusedMatcherKinds}
        />
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
    </Box>
  );
};

export default MappingEditor;
