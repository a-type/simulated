import React from 'react';
import { graphql, useFragment } from 'relay-hooks';
import { ScenarioList_scenarios$key } from './__generated__/ScenarioList_scenarios.graphql';

const scenariosFragment = graphql`
  fragment ScenarioList_scenarios on ScenarioConnection {
    edges {
      node {
        id
        name
      }
    }
  }
`;

export default (props: { scenarios: ScenarioList_scenarios$key }) => {
  const scenarios = useFragment(scenariosFragment, props.scenarios);

  return (
    <div>
      {scenarios.edges.map(({ node }) => (
        <span>{node.id}, </span>
      ))}
    </div>
  );
};
