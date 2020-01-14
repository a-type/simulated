import React, { FC } from 'react';
import {
  makeStyles,
  Theme,
  Card,
  CardHeader,
  CardContent,
} from '@material-ui/core';
import { useFragment, graphql } from 'relay-hooks';
import { ScenarioCard_scenario$key } from './__generated__/ScenarioCard_scenario.graphql';
import Link from './Link';

export interface ScenarioCardProps {
  scenario: ScenarioCard_scenario$key;
}

const useStyles = makeStyles<Theme, ScenarioCardProps>(theme => ({}));

const scenarioFragment = graphql`
  fragment ScenarioCard_scenario on Scenario {
    id
    name
    createdAt
  }
`;

const ScenarioCard: FC<ScenarioCardProps> = props => {
  const classes = useStyles(props);
  const scenario = useFragment(scenarioFragment, props.scenario);

  return (
    <Card>
      <Link
        href="/scenarios/[scenarioId]"
        as={`/scenarios/${scenario.id}`}
        underline="none"
        color="inherit"
      >
        <CardHeader
          title={scenario.name}
          subheader={`Created: ${scenario.createdAt}`}
          subheaderTypographyProps={{ variant: 'caption' }}
        />
        <CardContent>A scenario!</CardContent>
      </Link>
    </Card>
  );
};

export default ScenarioCard;
