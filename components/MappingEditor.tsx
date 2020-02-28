import React, { FC } from 'react';
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
import MatcherAddWidget, { MatcherKind } from './MatcherAddWidget';
import MatcherEditWidget from './MatcherEditWidget';
import MappingPriorityField from './MappingPriorityField';
import MappingResponseEditWidget from './MappingResponseEditWidget';

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
      kind
      ...MatcherEditWidget_matcher
    }
    trigger {
      targetState {
        name
      }
    }
    priority
    createdAt
    updatedAt
    ...MatcherAddWidget_mapping
    ...MappingPriorityField_mapping
    ...MappingResponseEditWidget_mapping
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
    kind => !mapping.matchers.some(matcher => (matcher as any).kind === kind),
  ) as MatcherKind[];

  return (
    <Box>
      <Box mb={2}>
        <Typography variant="h4">Basics</Typography>
        <MappingPriorityField mapping={mapping as any} />
      </Box>
      <Divider className={classes.divider} />
      <Box mb={2}>
        <Typography variant="h4">Request Matching</Typography>
        <Box mb={2}>
          {mapping.matchers.map(matcher => (
            <MatcherEditWidget
              matcher={matcher as any}
              key={(matcher as any).kind}
              mappingId={mapping.id}
            />
          ))}
        </Box>
        <MatcherAddWidget
          mapping={mapping}
          availableKinds={unusedMatcherKinds}
        />
      </Box>
      <Divider className={classes.divider} />
      <Box mb={2}>
        <Typography variant="h4">Response</Typography>
        <MappingResponseEditWidget mapping={mapping} />
      </Box>
    </Box>
  );
};

export default MappingEditor;
