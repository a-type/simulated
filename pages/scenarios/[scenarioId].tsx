import { useQuery, graphql } from 'relay-hooks';
import { useRouter } from 'next/router';
import { ScenarioIdQuery } from './__generated__/ScenarioIdQuery.graphql';
import { Container, makeStyles } from '@material-ui/core';
import ScenarioDetails from '../../components/ScenarioDetails';
import ScenarioStates from '../../components/ScenarioStates';
import AddStateButton from '../../components/AddStateButton';

const query = graphql`
  query ScenarioIdQuery($scenarioId: ID!) {
    viewer {
      scenario(id: $scenarioId) {
        ...ScenarioDetails_scenario
        ...ScenarioStates_scenario
        ...AddStateButton_scenario
      }
    }
  }
`;

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(3),
  },
  states: {
    marginBottom: theme.spacing(2),
  },
}));

function ScenarioPage() {
  const classes = useStyles({});

  const router = useRouter();
  const { scenarioId } = router.query;

  const { props } = useQuery<ScenarioIdQuery>(
    query,
    {
      scenarioId: scenarioId as string,
    },
    {},
  );

  if (!props) return <div>Loading...</div>;

  return (
    <Container className={classes.container}>
      <ScenarioDetails scenario={props.viewer.scenario} />
      <ScenarioStates
        scenario={props.viewer.scenario}
        className={classes.states}
      />
      <AddStateButton scenario={props.viewer.scenario} variant="contained">
        Add state
      </AddStateButton>
    </Container>
  );
}

export default ScenarioPage;
