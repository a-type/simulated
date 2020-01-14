import ScenarioList from '../components/ScenarioList';
import { useQuery, graphql } from 'relay-hooks';
import { pages_indexQuery } from './__generated__/pages_indexQuery.graphql';

const query = graphql`
  query pages_indexQuery {
    scenarios {
      ...ScenarioList_scenarios
    }
  }
`;

function HomePage() {
  const { props, error, retry, cached } = useQuery<pages_indexQuery>(
    query,
    {},
    {},
  );

  if (error) return error.message;

  if (!props) return null;

  return (
    <>
      <div>Hello Next.js</div>
      <ScenarioList scenarios={props.scenarios} />
    </>
  );
}

export default HomePage;
