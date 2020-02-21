import React, { FC } from 'react';
import { graphql, useFragment } from 'relay-hooks';
import Link from './Link';
import { MappingLink_scenario$key } from './__generated__/MappingLink_scenario.graphql';
import { MappingLink_state$key } from './__generated__/MappingLink_state.graphql';
import { MappingLink_mapping$key } from './__generated__/MappingLink_mapping.graphql';
import { LinkProps } from './Link';

export interface MappingLinkProps extends Omit<LinkProps, 'href' | 'as'> {
  scenario: MappingLink_scenario$key;
  state: MappingLink_state$key;
  mapping: MappingLink_mapping$key;
}

const scenarioFragment = graphql`
  fragment MappingLink_scenario on Scenario {
    id
  }
`;

const stateFragment = graphql`
  fragment MappingLink_state on State {
    id
    name
  }
`;

const mappingFragment = graphql`
  fragment MappingLink_mapping on Mapping {
    id
  }
`;

const MappingLink: FC<MappingLinkProps> = ({
  scenario: scenarioKey,
  state: stateKey,
  mapping: mappingKey,
  ...rest
}) => {
  const scenario = useFragment(scenarioFragment, scenarioKey);
  const state = useFragment(stateFragment, stateKey);
  const mapping = useFragment(mappingFragment, mappingKey);

  if (!scenario || !state || !mapping) {
    return (
      <Link
        {...rest}
        href="/scenarios/[scenarioId]/states/[stateId]"
        as={`/scenarios/${scenario?.id ?? null}/states/${state?.id ??
          null}/mappings/null`}
      >
        ???
      </Link>
    );
  }

  return (
    <Link
      {...rest}
      href="/scenarios/[scenarioId]/states/[stateId]/mappings/[mappingId]"
      as={`/scenarios/${scenario.id}/states/${state.id}/mappings/${mapping.id}`}
    >
      {state.name}
    </Link>
  );
};

export default MappingLink;
