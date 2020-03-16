import React, { FC } from 'react';
import { graphql, useFragment } from 'react-relay/hooks';
import Link from './Link';
import { StateLink_scenario$key } from './__generated__/StateLink_scenario.graphql';
import { StateLink_state$key } from './__generated__/StateLink_state.graphql';
import { LinkProps } from './Link';

export interface StateLinkProps extends Omit<LinkProps, 'href' | 'as' | 'ref'> {
  scenario: StateLink_scenario$key;
  state: StateLink_state$key;
}

const scenarioFragment = graphql`
  fragment StateLink_scenario on Scenario {
    id
  }
`;

const stateFragment = graphql`
  fragment StateLink_state on State {
    id
    name
  }
`;

const StateLink: FC<StateLinkProps> = ({
  scenario: scenarioKey,
  state: stateKey,
  ...rest
}) => {
  const scenario = useFragment(scenarioFragment, scenarioKey);
  const state = useFragment(stateFragment, stateKey);

  if (!scenario || !state) {
    return (
      <Link
        {...rest}
        href="/scenarios/[scenarioId]/states/[stateId]"
        as={`/scenarios/${scenario?.id ?? null}/states/null`}
      >
        ???
      </Link>
    );
  }

  return (
    <Link
      {...rest}
      href="/scenarios/[scenarioId]/states/[stateId]"
      as={`/scenarios/${scenario.id}/states/${state.id}`}
    >
      {state.name}
    </Link>
  );
};

export default StateLink;
