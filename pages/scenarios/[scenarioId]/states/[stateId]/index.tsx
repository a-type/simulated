import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import {
  makeStyles,
  Container,
  CircularProgress,
  Breadcrumbs,
  Typography,
  Paper,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import Navigation from '../../../../../components/Navigation';
import { StateIdQuery } from './__generated__/StateIdQuery.graphql';
import StateDetails from '../../../../../components/StateDetails';
import StateMappings from '../../../../../components/StateMappings';
import Link from '../../../../../components/Link';
import singleQuery from '../../../../../lib/singleQuery';
import ScenarioLink from '../../../../../components/ScenarioLink';
import StateLink from '../../../../../components/StateLink';
import AddMappingButton from '../../../../../components/MappingAddButton';
import { useCallback } from 'react';

const query = graphql`
  query StateIdQuery($stateId: ID!, $scenarioId: ID!) {
    viewer {
      scenario(id: $scenarioId) {
        ...ScenarioLink_scenario
        ...StateLink_scenario
        ...StateMappings_scenario
      }
      state(id: $stateId) {
        ...StateDetails_state
        ...StateMappings_state
        ...StateLink_state
        ...MappingAddButton_state
      }
    }
  }
`;

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(3),
  },
  breadcrumbs: {
    marginBottom: theme.spacing(2),
  },
  topContent: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

function StatePage() {
  const classes = useStyles({});

  const router = useRouter();
  const { stateId, scenarioId } = singleQuery(router.query);

  const props = useLazyLoadQuery<StateIdQuery>(
    query,
    {
      stateId,
      scenarioId,
    },
    {},
  );

  const handleAddMapping = useCallback(
    (mapping: any) => {
      router.push(
        '/scenarios/[scenarioId]/states/[stateId]/mappings/[mappingId]',
        `/scenarios/${scenarioId}/states/${stateId}/mappings/${mapping.id}`,
      );
    },
    [router],
  );

  if (!props || !props.viewer?.state || !props.viewer?.scenario) {
    return (
      <>
        <Navigation />
        <Container className={classes.container}>State not found</Container>
      </>
    );
  }

  return (
    <>
      <Navigation />
      <Container className={classes.container}>
        <Breadcrumbs className={classes.breadcrumbs}>
          <Link href="/">Scenarios</Link>
          <ScenarioLink scenario={props.viewer.scenario} />
          <Typography>States</Typography>
          <StateLink
            disabled
            scenario={props.viewer.scenario}
            state={props.viewer.state}
          />
        </Breadcrumbs>
        <Paper className={classes.topContent}>
          <StateDetails state={props.viewer.state} />
        </Paper>
        <StateMappings
          state={props.viewer.state}
          scenario={props.viewer.scenario}
        />
        <AddMappingButton state={props.viewer.state} onAdd={handleAddMapping}>
          Add mapping
        </AddMappingButton>
      </Container>
    </>
  );
}

export default StatePage;
