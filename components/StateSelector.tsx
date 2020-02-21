import React, { FC } from 'react';
import { makeStyles, Theme, TextField } from '@material-ui/core';
import { Autocomplete, AutocompleteProps } from '@material-ui/lab';
import { graphql, usePagination } from 'relay-hooks';
import clsx from 'clsx';
import { StateSelector_scenario$key } from './__generated__/StateSelector_scenario.graphql';

type StateSelectorState = StateSelector_scenario$key[' $data']['possibleStates']['edges'][0]['node'];

export interface StateSelectorProps
  extends Omit<
    AutocompleteProps<StateSelectorState>,
    'options' | 'renderInput'
  > {
  scenario: StateSelector_scenario$key;
  value: StateSelectorState;
  onChange: (ev: any, value: StateSelectorState) => void;
}

const useStyles = makeStyles<Theme, StateSelectorProps>(theme => ({
  root: {
    minWidth: 200,
  },
}));

const scenarioFragment = graphql`
  fragment StateSelector_scenario on Scenario
    @argumentDefinitions(first: { type: "Int", defaultValue: 10 }) {
    id
    possibleStates(first: $first)
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
  const { scenario: scenarioKey, className, ...rest } = props;
  const classes = useStyles(props);

  const [{ possibleStates, id: scenarioId }] = usePagination(
    scenarioFragment,
    scenarioKey,
  );

  return (
    <Autocomplete
      {...rest}
      className={clsx(classes.root, className)}
      options={possibleStates.edges.map(({ node }) => node)}
      getOptionLabel={state => state?.name ?? ''}
      renderInput={params => (
        <TextField {...params} fullWidth placeholder="Choose a state" />
      )}
    />
  );
};

export default StateSelector;
