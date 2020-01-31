import { graphql, useQuery } from 'relay-hooks';
import { makeStyles, Container, CircularProgress } from '@material-ui/core';
import { useRouter } from 'next/router';
import Navigation from '../../../../components/Navigation';
import { StateIdQuery } from './__generated__/StateIdQuery.graphql';
import StateDetails from '../../../../components/StateDetails';
import StateMappings from '../../../../components/StateMappings';
import AddMappingButton from '../../../../components/AddMappingButton';

const query = graphql`
  query StateIdQuery($stateId: ID!) {
    viewer {
      state(id: $stateId) {
        ...StateDetails_state
        ...StateMappings_state
        ...AddMappingButton_state
      }
    }
  }
`;

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(3),
  },
}));

function StatePage() {
  const classes = useStyles({});

  const router = useRouter();
  const { stateId } = router.query;

  const { props } = useQuery<StateIdQuery>(
    query,
    {
      stateId: stateId as string,
    },
    {},
  );

  return (
    <>
      <Navigation />
      <Container className={classes.container}>
        {props ? (
          props.viewer?.state ? (
            <>
              <StateDetails state={props.viewer.state} />
              <StateMappings state={props.viewer.state} />
              <AddMappingButton state={props.viewer.state}>
                Add mapping
              </AddMappingButton>
            </>
          ) : (
            <div>State does not exist</div>
          )
        ) : (
          <CircularProgress />
        )}
      </Container>
    </>
  );
}

export default StatePage;
