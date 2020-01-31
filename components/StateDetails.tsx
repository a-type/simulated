import React, { FC, useState, useEffect, useCallback } from 'react';
import {
  makeStyles,
  Theme,
  Box,
  TextField,
  Typography,
} from '@material-ui/core';
import { useFragment, graphql, useMutation } from 'relay-hooks';
import { StateDetails_state$key } from './__generated__/StateDetails_state.graphql';
import useSavingField from '../hooks/useSavingField';
import Timestamp from './Timestamp';
import clsx from 'clsx';
import { StateDetails_updateStateMutation } from './__generated__/StateDetails_updateStateMutation.graphql';

export interface StateDetailsProps {
  state: StateDetails_state$key;
}

const useStyles = makeStyles<Theme, StateDetailsProps>(theme => ({
  root: {},
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

const stateFragment = graphql`
  fragment StateDetails_state on State {
    id
    name
    createdAt
    updatedAt
  }
`;

const updateStateMutation = graphql`
  mutation StateDetails_updateStateMutation($input: SetStateDetailsInput!) {
    setStateDetails(input: $input) {
      state {
        id
        name
        createdAt
        updatedAt
      }
    }
  }
`;

const StateDetails: FC<StateDetailsProps> = props => {
  const classes = useStyles(props);

  const state = useFragment(stateFragment, props.state);

  const [mutate] = useMutation<StateDetails_updateStateMutation>(
    updateStateMutation,
    {},
  );

  const saveName = useCallback(
    async (name: string) => {
      await mutate({
        variables: {
          input: {
            stateId: state?.id,
            name,
          },
        },
      });
    },
    [mutate, state?.id],
  );

  const [fieldProps, { saving, justUpdated }] = useSavingField(
    state?.name,
    saveName,
  );

  if (!state) {
    return <div>State was deleted or does not exist</div>;
  }

  return (
    <Box display="flex" flexDirection="column" className={classes.root}>
      <TextField
        {...fieldProps}
        label="State name"
        required
        disabled={saving}
        margin="normal"
        className={classes.name}
      />
      <Typography variant="caption" className={classes.timestamp}>
        Created: <Timestamp date={state.createdAt} />
      </Typography>
      <Typography
        variant="caption"
        className={clsx(classes.timestamp, {
          [classes.timestampLoading]: justUpdated,
        })}
      >
        Updated: <Timestamp date={state.updatedAt} />
      </Typography>
    </Box>
  );
};

export default StateDetails;
