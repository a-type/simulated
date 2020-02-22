import React, { FC } from 'react';
import {
  makeStyles,
  Theme,
  Container,
  CircularProgress,
  Breadcrumbs,
  Typography,
} from '@material-ui/core';
import { graphql, useQuery } from 'relay-hooks';
import { useRouter } from 'next/router';
import singleQuery from '../../../../../../lib/singleQuery';
import Navigation from '../../../../../../components/Navigation';
import Link from '../../../../../../components/Link';
import ScenarioLink from '../../../../../../components/ScenarioLink';
import StateLink from '../../../../../../components/StateLink';
import MappingLink from '../../../../../../components/MappingLink';
import MappingEditor from '../../../../../../components/MappingEditor';
import { MappingIdQuery } from './__generated__/MappingIdQuery.graphql';

const query = graphql`
  query MappingIdQuery($scenarioId: ID!, $stateId: ID!, $mappingId: ID!) {
    viewer {
      scenario(id: $scenarioId) {
        ...ScenarioLink_scenario
        ...StateLink_scenario
        ...MappingLink_scenario
      }
      state(id: $stateId) {
        ...StateLink_state
        ...MappingLink_state
      }
      mapping(id: $mappingId) {
        ...MappingLink_mapping
        ...MappingEditor_mapping
      }
    }
  }
`;

export interface MappingPageProps {}

const useStyles = makeStyles<Theme, MappingPageProps>(theme => ({
  container: {
    marginTop: theme.spacing(3),
  },
  breadcrumbs: {
    marginBottom: theme.spacing(2),
  },
}));

const MappingPage: FC<MappingPageProps> = () => {
  const classes = useStyles({});

  const router = useRouter();
  const { stateId, scenarioId, mappingId } = singleQuery(router.query);

  const { props } = useQuery<MappingIdQuery>(
    query,
    {
      stateId,
      scenarioId,
      mappingId,
    },
    {},
  );

  const handleMappingSave = () => {};

  if (!props) {
    return (
      <>
        <Navigation />
        <CircularProgress />
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
          <MappingLink
            scenario={props.viewer.scenario}
            state={props.viewer.state}
            mapping={props.viewer.mapping}
          />
        </Breadcrumbs>
        <MappingEditor
          mapping={props.viewer.mapping}
          onSubmit={handleMappingSave}
        />
      </Container>
    </>
  );
};

export default MappingPage;
