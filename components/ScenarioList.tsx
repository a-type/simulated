import React from 'react';
import { graphql, useFragment } from 'relay-hooks';

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

export default props => {
  const scenarios = useFragment(scenariosFragment, props.scenarios);

  return (
    <div>
      {scenarios.edges.map(node => <span>{node.id}, </span>)}
    </div>
  );
}