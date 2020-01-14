import { useQuery, graphql } from 'relay-hooks';
import { useRouter } from 'next/router';
import { ScenarioIdQuery } from './__generated__/ScenarioIdQuery.graphql';
import { Container } from '@material-ui/core';
import ScenarioDetails from '../../components/ScenarioDetails';

const query = graphql`
  query ScenarioIdQuery($scenarioId: ID!) {
    viewer {
      scenario(id: $scenarioId) {
        ...ScenarioDetails_scenario
      }
    }
  }
`;

function ScenarioPage() {
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
    <Container>
      <ScenarioDetails scenario={props.viewer.scenario} />
    </Container>
  );
}

export default ScenarioPage;
