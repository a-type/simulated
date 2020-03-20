import React, { FC, useState, useCallback } from 'react';
import {
  makeStyles,
  Theme,
  Box,
  TextField,
  IconButton,
  Button,
} from '@material-ui/core';
import { useFragment, graphql } from 'react-relay/hooks';
import useSavingField from '../hooks/useSavingField';
import { DeleteTwoTone, AddTwoTone } from '@material-ui/icons';
import { HeadersMatcherEditWidget_matcher$key } from './__generated__/HeadersMatcherEditWidget_matcher.graphql';
import useMutation from '../hooks/useMutation';

export interface HeadersMatcherEditWidgetProps {
  matcher: HeadersMatcherEditWidget_matcher$key;
  mappingId: string;
}

const matcherFragment = graphql`
  fragment HeadersMatcherEditWidget_matcher on Matcher {
    ... on HeadersMatcher {
      headers {
        name
        value
      }
    }
  }
`;

const setMatcherMutation = graphql`
  mutation HeadersMatcherEditWidget_setMatcherMutation(
    $input: AddMappingMatcherInput!
  ) {
    addMappingMatcher(input: $input) {
      mapping {
        matchers {
          ... on HeadersMatcher {
            headers {
              name
              value
            }
          }
        }
      }
    }
  }
`;

const useStyles = makeStyles<Theme, HeadersMatcherEditWidgetProps>(
  theme => ({}),
);

const HeadersMatcherEditWidget: FC<HeadersMatcherEditWidgetProps> = props => {
  const { mappingId } = props;
  const classes = useStyles(props);

  const { headers = [] } = useFragment(matcherFragment, props.matcher);
  const [mutate] = useMutation(setMatcherMutation);

  const handleHeaderChange = useCallback(
    async (header: { name: string; value: string | null }, index: number) => {
      if (!header.value) {
        delete header.value;
      }
      const headersCopy = [...headers];
      headersCopy[index] = header as any;
      await mutate({
        variables: {
          input: {
            mappingId,
            matcher: {
              headers: {
                headers: headersCopy,
              },
            },
          },
        },
      });
    },
    [headers, mutate],
  );

  const handleHeaderDelete = useCallback(
    async (index: number) => {
      const modifiedHeaders = [...headers];
      modifiedHeaders.splice(index, 1);
      await mutate({
        variables: {
          input: {
            mappingId,
            matcher: {
              headers: {
                headers: modifiedHeaders,
              },
            },
          },
        },
      });
    },
    [headers, mutate],
  );

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start">
      {headers.map((header, index) => (
        <HeaderFields
          key={index}
          header={header}
          index={index}
          onChange={handleHeaderChange}
          onDelete={handleHeaderDelete}
        />
      ))}
      <Button
        onClick={() =>
          handleHeaderChange({ name: 'x-header', value: null }, headers.length)
        }
        variant="text"
        startIcon={<AddTwoTone />}
      >
        Add
      </Button>
    </Box>
  );
};

export default HeadersMatcherEditWidget;

const HeaderFields: FC<{
  index: number;
  header: {
    name: string;
    value: string | null;
  };
  onChange: (
    header: { name: string; value: string | null },
    index: number,
  ) => any;
  onDelete: (index: number) => any;
}> = props => {
  const [nameField] = useSavingField(props.header.name, newName => {
    props.onChange({ ...props.header, name: newName }, props.index);
  });
  const [valueField] = useSavingField(props.header.value || '', newValue => {
    props.onChange({ ...props.header, value: newValue }, props.index);
  });

  return (
    <Box display="flex" flexDirection="row">
      <TextField {...nameField} required label="Header name" margin="normal" />
      <TextField {...valueField} label="Header value" margin="normal" />
      <IconButton onClick={() => props.onDelete(props.index)}>
        <DeleteTwoTone />
      </IconButton>
    </Box>
  );
};
