import React, { FC } from 'react';
import { makeStyles, Theme, TextField } from '@material-ui/core';
import { Autocomplete, AutocompleteProps } from '@material-ui/lab';
import { graphql, usePaginationFragment } from 'react-relay/hooks';
import clsx from 'clsx';
import {
  StateSelector_scenario$key,
  StateSelector_scenario,
} from './__generated__/StateSelector_scenario.graphql';

type StateSelectorState = StateSelector_scenario['possibleStates']['edges'][0]['node'];

export interface StateSelectorProps
  extends Omit<
    AutocompleteProps<StateSelectorState>,
    'options' | 'renderInput'
  > {
  scenario: StateSelector_scenario$key;
  value: StateSelectorState | null;
  onChange: (ev: any, value: StateSelectorState | null) => void;
  required?: boolean;
}

const useStyles = makeStyles<Theme, StateSelectorProps>(theme => ({
  root: {
    minWidth: 200,
  },
}));

const scenarioFragment = graphql`
  fragment StateSelector_scenario on Scenario
    @argumentDefinitions(
      first: { type: "Int", defaultValue: 10 }
      after: { type: "String" }
    )
    @refetchable(queryName: "StateSelectorPaginationQuery") {
    id
    possibleStates(first: $first, after: $after)
      @connection(key: "StateSelector_possibleStates") {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

const StateSelector: FC<StateSelectorProps> = props => {
  const { scenario: scenarioKey, className, required, ...rest } = props;
  const classes = useStyles(props);

  const { data } = usePaginationFragment(scenarioFragment, scenarioKey);

  const { possibleStates, id: scenarioId } = data || {};

  return (
    <Autocomplete
      {...rest}
      multiple={false}
      className={clsx(classes.root, className)}
      options={possibleStates.edges.map(({ node }) => node)}
      getOptionLabel={state => state?.name ?? ''}
      renderInput={params => (
        <TextField
          {...params}
          fullWidth
          placeholder="Choose a state"
          required={required}
        />
      )}
    />
  );
};

export default StateSelector;
