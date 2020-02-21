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
import { StateMappings_state$key } from './__generated__/StateMappings_state.graphql';
import MappingLink from './MappingLink';
import { StateMappings_scenario$key } from './__generated__/StateMappings_scenario.graphql';

export interface StateMappingsProps {
  state: StateMappings_state$key;
  scenario: StateMappings_scenario$key;
}

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
  const { mappings } = state;
  const scenario = useFragment(scenarioFragment, props.scenario);

  if (!mappings.edges.length) {
    return <Box my={2}>There are no mappings for this state</Box>;
  }

  return (
    <Table {...props}>
      <TableHead>
        <TableRow>
          <TableCell>Path</TableCell>
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
                <PathMatcherSummary matcher={node.pathMatcher} />
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

const PathMatcherSummary: FC<{ matcher: any }> = ({ matcher }) => {
  if (matcher.kind === 'Literal') {
    return <>{matcher.value}</>;
  }

  return <>Unknown matcher type</>;
};

export default StateMappings;
