import { useQuery, graphql } from 'relay-hooks';
import { useRouter } from 'next/router';
import { ScenarioIdQuery } from './__generated__/ScenarioIdQuery.graphql';
import {
  Container,
  makeStyles,
  CircularProgress,
  Paper,
} from '@material-ui/core';
import ScenarioDetails from '../../../components/ScenarioDetails';
import ScenarioStates from '../../../components/ScenarioStates';
import AddStateButton from '../../../components/AddStateButton';
import DeleteScenarioButton from '../../../components/DeleteScenarioButton';
import { useCallback } from 'react';
import Router from 'next/router';
import Navigation from '../../../components/Navigation';
import ScenarioStatus from '../../../components/ScenarioStatus';

const query = graphql`
  query ScenarioIdQuery($scenarioId: ID!) {
    viewer {
      ...DeleteScenarioButton_viewer
      scenario(id: $scenarioId) {
        ...ScenarioDetails_scenario
        ...ScenarioStatus_scenario
        ...ScenarioStates_scenario
        ...AddStateButton_scenario
        ...DeleteScenarioButton_scenario
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
  details: {
    marginBottom: theme.spacing(2),
  },
  topSection: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
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

  const handleDeleteScenario = useCallback(() => {
    Router.push(`/`);
  }, []);

  return (
    <>
      <Navigation />
      <Container className={classes.container}>
        {props ? (
          props.viewer?.scenario ? (
            <>
              <Paper className={classes.topSection}>
                <ScenarioDetails
                  className={classes.details}
                  scenario={props.viewer.scenario}
                />
                <ScenarioStatus scenario={props.viewer.scenario} />
              </Paper>
              <DeleteScenarioButton
                scenario={props.viewer.scenario}
                viewer={props.viewer}
                onDelete={handleDeleteScenario}
              >
                Delete this scenario
              </DeleteScenarioButton>
              <ScenarioStates
                scenario={props.viewer.scenario}
                className={classes.states}
              />
              <AddStateButton
                scenario={props.viewer.scenario}
                variant="contained"
              >
                Add state
              </AddStateButton>
            </>
          ) : (
            <div>Scenario does not exist</div>
          )
        ) : (
          <CircularProgress />
        )}
      </Container>
    </>
  );
}

export default ScenarioPage;
