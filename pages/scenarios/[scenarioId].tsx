import { useQuery, graphql } from 'relay-hooks';
import { useRouter } from 'next/router';
import { ScenarioIdQuery } from './__generated__/ScenarioIdQuery.graphql';

const query = graphql`
  query ScenarioIdQuery($scenarioId: ID!) {
    viewer {
      scenario(id: $scenarioId) {
        id
        name
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
    <div>
      Scenario: {scenarioId}, {props.viewer.scenario.name}
    </div>
  );
}

export default ScenarioPage;
