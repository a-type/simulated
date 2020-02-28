import ScenarioList from '../components/ScenarioList';
import { useQuery, graphql } from 'relay-hooks';
import { pages_indexQuery } from './__generated__/pages_indexQuery.graphql';
import ScenarioAddButton from '../components/ScenarioAddButton';
import { useCallback } from 'react';
import Router from 'next/router';
import { Container, Box, makeStyles } from '@material-ui/core';
import Navigation from '../components/Navigation';

const query = graphql`
  query pages_indexQuery($first: Int = 10) {
    viewer {
      ...ScenarioList_viewer @arguments(first: $first)
      ...ScenarioAddButton_viewer
    }
  }
`;

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(3),
  },
}));

function HomePage() {
  const classes = useStyles({});

  const { props, error, retry, cached } = useQuery<pages_indexQuery>(
    query,
    {},
    {},
  );

  const handleAddScenario = useCallback((scenarioId: string) => {
    Router.push(`/scenarios/${scenarioId}`);
  }, []);

  if (error) return error.message;

  if (!props) return null;

  return (
    <>
      <Navigation />
      <Container className={classes.container}>
        <Box mb={3}>
          <ScenarioList viewer={props.viewer} />
        </Box>
        <ScenarioAddButton viewer={props.viewer} onAdd={handleAddScenario}>
          Add scenario
        </ScenarioAddButton>
      </Container>
    </>
  );
}

export default HomePage;
