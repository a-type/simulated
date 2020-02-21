import React, { FC } from 'react';
import { graphql, useFragment } from 'relay-hooks';
import Link from './Link';
import { ScenarioLink_scenario$key } from './__generated__/ScenarioLink_scenario.graphql';
import { LinkProps } from './Link';

export interface ScenarioLinkProps extends Omit<LinkProps, 'href' | 'as'> {
  scenario: ScenarioLink_scenario$key;
}

const scenarioFragment = graphql`
  fragment ScenarioLink_scenario on Scenario {
    id
    name
  }
`;

const ScenarioLink: FC<ScenarioLinkProps> = ({
  scenario: scenarioKey,
  ...rest
}) => {
  const scenario = useFragment(scenarioFragment, scenarioKey);

  if (!scenario) {
    return (
      <Link {...rest} href="/scenarios/[scenarioId]" as={`/scenarios/null`}>
        ???
      </Link>
    );
  }

  return (
    <Link
      {...rest}
      href="/scenarios/[scenarioId]"
      as={`/scenarios/${scenario.id}`}
    >
      {scenario.name}
    </Link>
  );
};

export default ScenarioLink;
