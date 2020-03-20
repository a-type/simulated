import React, { FC, useMemo, useState, useCallback } from 'react';
import {
  makeStyles,
  Theme,
  Box,
  Divider,
  Typography,
  Tabs,
  Tab,
} from '@material-ui/core';
import { graphql, useFragment } from 'react-relay/hooks';
import { MappingEditor_mapping$key } from './__generated__/MappingEditor_mapping.graphql';
import MatcherAddWidget, { MatcherKind } from './MatcherAddWidget';
import MatcherEditWidget from './MatcherEditWidget';
import MappingPriorityField from './MappingPriorityField';
import MappingResponseEditWidget from './MappingResponseEditWidget';

export interface MappingEditorProps {
  mapping: MappingEditor_mapping$key;
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
    kind => !mapping?.matchers.some(matcher => (matcher as any).kind === kind),
  ) as MatcherKind[];

  const matchers = mapping?.matchers || [];

  const sortedMatchers = useMemo(
    () => [...matchers].sort((a, b) => a.kind.localeCompare(b.kind)),
    [matchers],
  );

  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabChange = useCallback(
    (ev: any, newTab: number) => {
      setActiveTab(newTab);
    },
    [setActiveTab],
  );

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
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            aria-label="matcher options tabs"
          >
            {sortedMatchers.map(matcher => (
              <Tab
                label={matcher.kind}
                id={`matcher-tab-${matcher.kind}`}
                aria-controls={`matcher-tabpanel-${matcher.kind}`}
              />
            ))}
          </Tabs>
          <Box mt={2}>
            {sortedMatchers.map((matcher, index) => (
              <div
                role="tabpanel"
                id={`matcher-tabpanel-${matcher.kind}`}
                aria-labelledby={`matcher-tab-${matcher.kind}`}
                hidden={index !== activeTab}
              >
                <MatcherEditWidget
                  matcher={matcher as any}
                  key={(matcher as any).kind}
                  mappingId={mapping?.id}
                />
              </div>
            ))}
          </Box>
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
