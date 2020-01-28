import React, {
  FC,
  useState,
  useEffect,
  useCallback,
  ChangeEvent,
  FocusEvent,
} from 'react';
import {
  makeStyles,
  Theme,
  Box,
  TextField,
  Typography,
} from '@material-ui/core';
import { graphql, useMutation, useFragment } from 'relay-hooks';
import { ScenarioDetails_scenario$key } from './__generated__/ScenarioDetails_scenario.graphql';
import { ScenarioDetails_updateScenarioMutation } from './__generated__/ScenarioDetails_updateScenarioMutation.graphql';
import clsx from 'clsx';
import Timestamp from './Timestamp';

export interface ScenarioDetailsProps {
  scenario: ScenarioDetails_scenario$key;
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
  const classes = useStyles(props);

  const scenario = useFragment(scenarioFragment, props.scenario);

  // raw input value
  const [nameValue, setNameValue] = useState(scenario?.name);

  // synchronize input state with updated api data
  useEffect(() => {
    setNameValue(scenario?.name);
  }, [scenario?.name]);

  // tracking when the details were updated by the user
  const [justUpdated, setJustUpdated] = useState(false);
  // resets just updated after 2 seconds
  useEffect(() => {
    if (justUpdated) {
      const handle = setTimeout(() => setJustUpdated(false), 2000);
      return () => clearTimeout(handle);
    }
  }, [justUpdated]);

  // mutation for modifying details
  const [mutate, { loading }] = useMutation<
    ScenarioDetails_updateScenarioMutation
  >(updateScenarioMutation, {
    onCompleted: () => {
      setJustUpdated(true);
    },
  });

  const handleNameFieldChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      const name = ev.target.value;
      setNameValue(name);
    },
    [setNameValue],
  );

  const handleNameFieldBlur = useCallback(
    (ev: FocusEvent<HTMLInputElement>) => {
      // bail if no change
      if (scenario.name === nameValue) return;

      mutate({
        variables: {
          input: {
            scenarioId: scenario.id,
            name: nameValue,
          },
        },
      });
    },
    [mutate, nameValue, scenario?.id, scenario?.name],
  );

  if (!scenario) {
    return <div>Scenario was deleted or does not exist</div>;
  }

  return (
    <Box display="flex" flexDirection="column" className={classes.root}>
      <TextField
        value={nameValue}
        onChange={handleNameFieldChange}
        onBlur={handleNameFieldBlur}
        label="Scenario name"
        required
        disabled={loading}
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
