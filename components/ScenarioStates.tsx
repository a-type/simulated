import React, { FC } from 'react';
import {
  makeStyles,
  Theme,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import { graphql, usePaginationFragment } from 'react-relay/hooks';
import { ScenarioStates_scenario$key } from './__generated__/ScenarioStates_scenario.graphql';
import Link from './Link';

export interface ScenarioStatesProps {
  scenario: ScenarioStates_scenario$key;
  className?: string;
}

const useStyles = makeStyles<Theme, ScenarioStatesProps>(theme => ({}));

const scenarioFragment = graphql`
  fragment ScenarioStates_scenario on Scenario
    @argumentDefinitions(
      first: { type: "Int", defaultValue: 10 }
      after: { type: "String" }
    )
    @refetchable(queryName: "ScenarioStatesPaginationQuery") {
    id

    defaultState {
      id
      name
    }

    possibleStates(first: $first, after: $after)
      @connection(key: "ScenarioStates_possibleStates") {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

const ScenarioStates: FC<ScenarioStatesProps> = props => {
  const { ...rest } = props;
  const classes = useStyles(props);

  const { data } = usePaginationFragment(scenarioFragment, props.scenario);

  const { defaultState, possibleStates, id: scenarioId } = data || {};

  return (
    <Table {...rest}>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Default</TableCell>
          <TableCell>ID</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {possibleStates?.edges.map(({ node }) => (
          <TableRow key={node.id}>
            <TableCell component="th" scope="row">
              <Link
                href="/scenarios/[scenarioId]/states/[stateId]"
                as={`/scenarios/${scenarioId}/states/${node.id}`}
              >
                {node.name}
              </Link>
            </TableCell>
            <TableCell>
              {`${!!defaultState && node.id === defaultState.id}`}
            </TableCell>
            <TableCell>{node.id}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ScenarioStates;
