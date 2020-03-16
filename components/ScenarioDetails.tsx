import React, { FC, useCallback } from 'react';
import {
  makeStyles,
  Theme,
  Box,
  TextField,
  Typography,
} from '@material-ui/core';
import { graphql, useFragment } from 'react-relay/hooks';
import { ScenarioDetails_scenario$key } from './__generated__/ScenarioDetails_scenario.graphql';
import { ScenarioDetails_updateScenarioMutation } from './__generated__/ScenarioDetails_updateScenarioMutation.graphql';
import clsx from 'clsx';
import Timestamp from './Timestamp';
import useSavingField from '../hooks/useSavingField';
import useMutation from '../hooks/useMutation';

export interface ScenarioDetailsProps {
  scenario: ScenarioDetails_scenario$key;
  className?: string;
}

const useStyles = makeStyles<Theme, ScenarioDetailsProps>(theme => ({
  root: {},
  field: {
    marginBottom: theme.spacing(2),
  },
  name: {
    fontSize: theme.typography.pxToRem(24),
    '& > div': {
      fontSize: 'inherit',
    },
  },
  timestamp: {
    opacity: 0.7,
    transition: theme.transitions.create('color'),
  },
  timestampLoading: {
    color: theme.palette.primary.light,
  },
}));

const scenarioFragment = graphql`
  fragment ScenarioDetails_scenario on Scenario {
    id
    name
    createdAt
    updatedAt
  }
`;

const updateScenarioMutation = graphql`
  mutation ScenarioDetails_updateScenarioMutation(
    $input: SetScenarioDetailsInput!
  ) {
    setScenarioDetails(input: $input) {
      scenario {
        id
        name
        createdAt
        updatedAt
      }
    }
  }
`;

const ScenarioDetails: FC<ScenarioDetailsProps> = props => {
  const { scenario: scenarioKey, className, ...rest } = props;
  const classes = useStyles(props);

  const scenario = useFragment(scenarioFragment, scenarioKey);

  // mutation for modifying details
  const [mutate] = useMutation<ScenarioDetails_updateScenarioMutation>(
    updateScenarioMutation,
    {},
  );

  const saveName = useCallback(
    async (name: string) => {
      await mutate({
        variables: {
          input: {
            scenarioId: scenario?.id,
            name,
          },
        },
      });
    },
    [mutate, scenario?.id],
  );

  const [fieldProps, { justUpdated, saving }] = useSavingField(
    scenario?.name || '',
    saveName,
  );

  if (!scenario) {
    return <div>Scenario was deleted or does not exist</div>;
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      {...rest}
      className={clsx(classes.root, className)}
    >
      <TextField
        {...fieldProps}
        label="Scenario name"
        required
        disabled={saving}
        className={clsx(classes.field, classes.name)}
      />
      <Typography variant="caption" className={classes.timestamp}>
        Created: <Timestamp date={scenario.createdAt} />
      </Typography>
      <Typography
        variant="caption"
        className={clsx(classes.timestamp, {
          [classes.timestampLoading]: justUpdated,
        })}
      >
        Updated: <Timestamp date={scenario.updatedAt} />
      </Typography>
    </Box>
  );
};

export default ScenarioDetails;
