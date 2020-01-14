import React from 'react';
import { graphql, usePagination } from 'relay-hooks';
import { ScenarioList_viewer$key } from './__generated__/ScenarioList_viewer.graphql';
import ScenarioCard from './ScenarioCard';
import { Grid } from '@material-ui/core';

const scenariosFragment = graphql`
  fragment ScenarioList_viewer on Viewer
    @argumentDefinitions(first: { type: "Int", defaultValue: 10 }) {
    scenarios(first: $first) @connection(key: "ScenarioList_scenarios") {
      edges {
        node {
          id
          ...ScenarioCard_scenario
        }
      }
    }
  }
`;

export default (props: { viewer: ScenarioList_viewer$key }) => {
  const [{ scenarios }] = usePagination<ScenarioList_viewer$key>(
    scenariosFragment,
    props.viewer,
  );

  return (
    <Grid container spacing={2}>
      {scenarios.edges.map(({ node }) => (
        <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={node.id}>
          <ScenarioCard scenario={node} />
        </Grid>
      ))}
    </Grid>
  );
};
