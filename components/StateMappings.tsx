import React, { FC } from 'react';
import {
  makeStyles,
  Theme,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from '@material-ui/core';
import { graphql, usePagination, useFragment } from 'relay-hooks';
import {
  StateMappings_state$key,
  StateMappings_state,
} from './__generated__/StateMappings_state.graphql';
import MappingLink from './MappingLink';
import { StateMappings_scenario$key } from './__generated__/StateMappings_scenario.graphql';

export interface StateMappingsProps {
  state: StateMappings_state$key;
  scenario: StateMappings_scenario$key;
}

type StateMappingsMapping = StateMappings_state['mappings']['edges'][0]['node'];

const useStyles = makeStyles<Theme, StateMappingsProps>(theme => ({}));

const stateFragment = graphql`
  fragment StateMappings_state on State
    @argumentDefinitions(first: { type: "Int", defaultValue: 10 }) {
    id

    mappings(first: $first) @connection(key: "StateMappings_mappings") {
      edges {
        node {
          # TODO: find better way to synchronize this...
          id
          matchers {
            kind
            ... on MethodsMatcher {
              methods
            }
            ... on PathMatcher {
              path
              regex
            }
            ... on BodyMatcher {
              body
              ignoreWhitespace
              regex
            }
            ... on HeadersMatcher {
              headers {
                name
                value
              }
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

          ...MappingLink_mapping
        }
      }
    }

    ...MappingLink_state
  }
`;

const scenarioFragment = graphql`
  fragment StateMappings_scenario on Scenario {
    ...MappingLink_scenario
  }
`;

const StateMappings: FC<StateMappingsProps> = props => {
  const classes = useStyles(props);

  const [state] = usePagination(stateFragment, props.state);
  const scenario = useFragment(scenarioFragment, props.scenario);

  if (!state) {
    return <Box my={2}>There was an error fetching this state</Box>;
  }

  const { mappings } = state;
  if (!mappings.edges.length) {
    return <Box my={2}>There are no mappings for this state</Box>;
  }

  return (
    <Table {...props}>
      <TableHead>
        <TableRow>
          <TableCell>Matches</TableCell>
          <TableCell>Response Type</TableCell>
          <TableCell>Trigger</TableCell>
          <TableCell>Priority</TableCell>
          <TableCell>ID</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {mappings.edges.map(({ node }) => (
          <TableRow key={node.id}>
            <TableCell>
              <MappingLink
                scenario={scenario}
                state={state as any}
                mapping={node as any}
              >
                <MatcherSummary mapping={node} />
              </MappingLink>
            </TableCell>
            <TableCell>{node.response?.body?.kind ?? 'None'}</TableCell>
            <TableCell>{node.trigger?.targetState?.name ?? 'None'}</TableCell>
            <TableCell>{node.priority}</TableCell>
            <TableCell>{node.id}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const MatcherSummary: FC<{ mapping: any }> = ({ mapping }) => {
  const summary = mapping.matchers.length
    ? mapping.matchers.reduce(
        (sum, matcher) => sum + ' ' + summarizeMatcher(matcher),
        '',
      )
    : '(no rules)';

  return <>{summary}</>;
};

const summarizeMatcher = matcher => {
  switch (matcher.kind) {
    case 'method':
      return summarizeMethodMatcher(matcher);
    case 'path':
      return summarizePathMatcher(matcher);
    default:
      return '';
  }
};

const summarizeMethodMatcher = matcher => {
  return matcher.methods.join('/');
};

const summarizePathMatcher = matcher => {
  return matcher.path;
};

export default StateMappings;
