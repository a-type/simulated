import React, { FC, useCallback, useState, ChangeEvent } from 'react';
import { makeStyles, Theme, TextField } from '@material-ui/core';
import { graphql, useFragment, useMutation } from 'relay-hooks';
import { MappingPriorityField_mapping$key } from './__generated__/MappingPriorityField_mapping.graphql';

export interface MappingPriorityFieldProps {
  mapping: MappingPriorityField_mapping$key;
}

const mappingFragment = graphql`
  fragment MappingPriorityField_mapping on Mapping {
    id
    priority
  }
`;

const setMappingPriorityMutation = graphql`
  mutation MappingPriorityField_setMappingPriorityMutation(
    $input: SetMappingPriorityInput!
  ) {
    setMappingPriority(input: $input) {
      mapping {
        id
        priority
      }
    }
  }
`;

const useStyles = makeStyles<Theme, MappingPriorityFieldProps>(theme => ({}));

const MappingPriorityField: FC<MappingPriorityFieldProps> = props => {
  const {} = props;
  const classes = useStyles(props);

  const { priority: savedValue, id: mappingId } = useFragment(
    mappingFragment,
    props.mapping,
  );

  const [internalValue, setInternalValue] = useState<number>(savedValue);

  const handleChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      const parsed = parseInt(ev.target.value, 10);
      if (isNaN(parsed)) {
        return;
      }
      setInternalValue(parsed);
    },
    [setInternalValue],
  );

  const [mutate, { loading }] = useMutation(setMappingPriorityMutation, {});

  const onBlur = useCallback(() => {
    if (internalValue === savedValue) return;

    mutate({
      variables: {
        input: {
          mappingId,
          priority: internalValue,
        },
      },
    });
  }, [mutate, internalValue, savedValue, mappingId]);

  return (
    <TextField
      type="number"
      name="priority"
      label="Priority"
      variant="outlined"
      margin="normal"
      onChange={handleChange}
      onBlur={onBlur}
      disabled={loading}
      value={internalValue.toString()}
    />
  );
};

export default MappingPriorityField;
