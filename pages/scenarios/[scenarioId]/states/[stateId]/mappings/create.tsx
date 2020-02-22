import React, { FC, useCallback } from 'react';
import {
  makeStyles,
  Theme,
  Container,
  Breadcrumbs,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import { graphql, useMutation, useQuery } from 'relay-hooks';
import { ConnectionHandler } from 'relay-runtime';
import MappingEditor from '../../../../../../components/MappingEditor';
import Navigation from '../../../../../../components/Navigation';
import singleQuery from '../../../../../../lib/singleQuery';
import Link from '../../../../../../components/Link';
import ScenarioLink from '../../../../../../components/ScenarioLink';
import StateLink from '../../../../../../components/StateLink';
import { createQuery } from './__generated__/createQuery.graphql';
import { create_addMappingMutation } from './__generated__/create_addMappingMutation.graphql';

const query = graphql`
  query createQuery($scenarioId: ID!, $stateId: ID!) {
    viewer {
      scenario(id: $scenarioId) {
        ...ScenarioLink_scenario
        ...StateLink_scenario
      }
      state(id: $stateId) {
        ...StateLink_state
      }
    }
  }
`;

export interface CreateMappingPageProps {}

const useStyles = makeStyles<Theme, CreateMappingPageProps>(theme => ({
  container: {
    marginTop: theme.spacing(3),
  },
  breadcrumbs: {
    marginBottom: theme.spacing(2),
  },
}));

const addMappingMutation = graphql`
  mutation create_addMappingMutation($input: AddStateMappingInput!) {
    addStateMapping(input: $input) {
      mappingEdge {
        node {
          # TODO: find a better way to sync this with StateMappings component?
          id
          methodMatcher {
            kind
            ... on LiteralsMethodMatcher {
              values
            }
          }
          pathMatcher {
            kind
            ... on LiteralPathMatcher {
              value
            }
          }
          bodyMatcher {
            kind
            ... on LiteralBodyMatcher {
              value
            }
          }
          headersMatcher {
            kind
            ... on LiteralsHeadersMatcher {
              values {
                name
                value
              }
            }
          }
          response {
            body {
              kind
            }
          }
          trigger {
            targetState {
              name
            }
          }
          priority
          createdAt
          updatedAt
        }
      }
    }
  }
`;

const CreateMappingPage: FC<CreateMappingPageProps> = () => {
  const classes = useStyles({});

  const router = useRouter();
  const { scenarioId, stateId } = singleQuery(router.query);

  const { props } = useQuery<createQuery>(
    query,
    {
      stateId,
      scenarioId,
    },
    {},
  );

  const [mutate] = useMutation<create_addMappingMutation>(addMappingMutation, {
    updater: store => {
      const root = store.getRootField('addStateMapping');
      if (!root) {
        console.warn(`Failed to update mappings after create`);
        return;
      }
      const edge = root.getLinkedRecord('mappingEdge');
      const stateProxy = store.get(stateId as string);
      const connection = ConnectionHandler.getConnection(
        stateProxy,
        'StateMappings_mappings',
      );
      ConnectionHandler.insertEdgeAfter(connection, edge);
    },
  });

  const handleSubmit = useCallback(
    values => {
      mutate({
        variables: {
          input: {
            stateId,
            mapping: values,
          },
        },
      });
    },
    [mutate],
  );

  if (!scenarioId || !stateId) {
    return null;
  }

  if (!props) {
    return (
      <>
        <Navigation /> <CircularProgress />
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
            scenario={props.viewer.scenario}
            state={props.viewer.state}
          />
          <Typography>Mappings</Typography>
          <Typography>Create</Typography>
        </Breadcrumbs>
        <MappingEditor
          onSubmit={handleSubmit}
          buttonContents="Create mapping"
        />
      </Container>
    </>
  );
};

export default CreateMappingPage;
