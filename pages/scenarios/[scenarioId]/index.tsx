import { useLazyLoadQuery, graphql } from 'react-relay/hooks';
import { useRouter } from 'next/router';
import { ScenarioIdQuery } from './__generated__/ScenarioIdQuery.graphql';
import {
  Container,
  makeStyles,
  CircularProgress,
  Paper,
  Breadcrumbs,
} from '@material-ui/core';
import ScenarioDetails from '../../../components/ScenarioDetails';
import ScenarioStates from '../../../components/ScenarioStates';
import StateAddButton from '../../../components/StateAddButton';
import ScenarioDeleteButton from '../../../components/ScenarioDeleteButton';
import { useCallback } from 'react';
import Router from 'next/router';
import Navigation from '../../../components/Navigation';
import ScenarioStatus from '../../../components/ScenarioStatus';
import ScenarioLink from '../../../components/ScenarioLink';
import Link from '../../../components/Link';

const query = graphql`
  query ScenarioIdQuery($scenarioId: ID!) {
    viewer {
      ...ScenarioDeleteButton_viewer
      scenario(id: $scenarioId) {
        ...ScenarioDetails_scenario
        ...ScenarioStatus_scenario
        ...ScenarioStates_scenario
        ...StateAddButton_scenario
        ...ScenarioDeleteButton_scenario
        ...ScenarioLink_scenario
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
  breadcrumbs: {
    marginBottom: theme.spacing(2),
  },
}));

function ScenarioPage() {
  const classes = useStyles({});

  const router = useRouter();
  const { scenarioId } = router.query;

  const props = useLazyLoadQuery<ScenarioIdQuery>(
    query,
    {
      scenarioId: scenarioId as string,
    },
    {},
  );

  const handleDeleteScenario = useCallback(() => {
    Router.push(`/`);
  }, []);

  if (!props || !props.viewer || !props.viewer.scenario) {
    return (
      <>
        <Navigation />
        <Container className={classes.container}>Scenario not found</Container>
      </>
    );
  }

  return (
    <>
      <Navigation />
      <Container className={classes.container}>
        <Breadcrumbs className={classes.breadcrumbs}>
          <Link href="/">Scenarios</Link>
          <ScenarioLink disabled scenario={props.viewer.scenario} />
        </Breadcrumbs>
        <Paper className={classes.topSection}>
          <ScenarioDetails
            className={classes.details}
            scenario={props.viewer.scenario}
          />
          <ScenarioStatus scenario={props.viewer.scenario} />
        </Paper>
        <ScenarioDeleteButton
          scenario={props.viewer.scenario}
          viewer={props.viewer}
          onDelete={handleDeleteScenario}
        >
          Delete this scenario
        </ScenarioDeleteButton>
        <ScenarioStates
          scenario={props.viewer.scenario}
          className={classes.states}
        />
        <StateAddButton scenario={props.viewer.scenario} variant="contained">
          Add state
        </StateAddButton>
      </Container>
    </>
  );
}

export default ScenarioPage;
