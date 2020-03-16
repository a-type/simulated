import React, { FC, useCallback } from 'react';
import { makeStyles, Theme, Box, Typography } from '@material-ui/core';
import { graphql, useFragment } from 'react-relay/hooks';
import Link from './Link';
import { ScenarioStatus_scenario$key } from './__generated__/ScenarioStatus_scenario.graphql';
import StateSelector from './StateSelector';
import useMutation from '../hooks/useMutation';

export interface ScenarioStatusProps {
  scenario: ScenarioStatus_scenario$key;
  className?: string;
}

const useStyles = makeStyles<Theme, ScenarioStatusProps>(theme => ({
  label: {
    fontWeight: 'bold',
    marginRight: theme.spacing(2),
  },
  emptyText: {
    color: theme.palette.error.main,
  },
}));

const scenarioFragment = graphql`
  fragment ScenarioStatus_scenario on Scenario {
    id
    currentState {
      id
      name
    }
    ...StateSelector_scenario
  }
`;

const setDefaultStateMutation = graphql`
  mutation ScenarioStatus_setDefaultStateMutation(
    $input: SetScenarioDefaultStateInput!
  ) {
    setScenarioDefaultState(input: $input) {
      scenario {
        defaultState {
          id
          name
        }
        currentState {
          id
          name
        }
      }
    }
  }
`;

const ScenarioStatus: FC<ScenarioStatusProps> = props => {
  const { scenario: scenarioKey, ...rest } = props;
  const classes = useStyles(props);
  const scenario = useFragment(scenarioFragment, scenarioKey);

  const [mutate] = useMutation(setDefaultStateMutation);

  const handleDefaultStateChange = useCallback(
    (_ev: any, state: { name: string; id: string } | null) => {
      if (!state) return;

      mutate({
        variables: {
          input: {
            scenarioId: scenario?.id,
            stateId: state.id,
          },
        },
      });
    },
    [],
  );

  return (
    <Box display="flex" flexDirection="column" {...rest}>
      <Box display="flex" alignItems="center">
        <Typography className={classes.label}>Current state:</Typography>
        {scenario.currentState ? (
          <Link
            href="/scenarios/[scenarioId]/states/[stateId]"
            as={`/scenarios/${scenario.id}/states/${scenario.currentState.id}`}
          >
            {scenario.currentState.name}
          </Link>
        ) : (
          <Typography className={classes.emptyText}>None</Typography>
        )}
      </Box>
      <Box display="flex" alignItems="center">
        <Typography className={classes.label}>Default state:</Typography>
        <StateSelector
          scenario={scenario}
          value={scenario.currentState}
          onChange={handleDefaultStateChange}
          disableClearable
          required
        />
      </Box>
    </Box>
  );
};

export default ScenarioStatus;
