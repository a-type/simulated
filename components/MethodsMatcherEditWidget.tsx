import React, { FC } from 'react';
import {
  makeStyles,
  Theme,
  Typography,
  Box,
  TextField,
} from '@material-ui/core';
import { useFragment, graphql } from 'react-relay/hooks';
import useSavingField from '../hooks/useSavingField';
import { Autocomplete } from '@material-ui/lab';
import { MethodsMatcherEditWidget_matcher$key } from './__generated__/MethodsMatcherEditWidget_matcher.graphql';
import useMutation from '../hooks/useMutation';

// TODO: actually look these up
const METHODS = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'];

export interface MethodsMatcherEditWidgetProps {
  matcher: MethodsMatcherEditWidget_matcher$key;
  mappingId: string;
}

const matcherFragment = graphql`
  fragment MethodsMatcherEditWidget_matcher on Matcher {
    ... on MethodsMatcher {
      methods
    }
  }
`;

const setMatcherMutation = graphql`
  mutation MethodsMatcherEditWidget_setMatcherMutation(
    $input: AddMappingMatcherInput!
  ) {
    addMappingMatcher(input: $input) {
      mapping {
        matchers {
          kind
          ... on MethodsMatcher {
            methods
          }
        }
      }
    }
  }
`;

const useStyles = makeStyles<Theme, MethodsMatcherEditWidgetProps>(
  theme => ({}),
);

const MethodsMatcherEditWidget: FC<MethodsMatcherEditWidgetProps> = props => {
  const { mappingId } = props;
  const classes = useStyles(props);

  const matcher = useFragment(matcherFragment, props.matcher);
  const [mutate] = useMutation(setMatcherMutation);

  const [methodsField, methodsFieldMeta] = useSavingField(
    matcher?.methods || ([] as string[]),
    async val => {
      await mutate({
        variables: {
          input: {
            mappingId,
            matcher: {
              methods: {
                ...matcher,
                methods: val,
              },
            },
          },
        },
      });
    },
  );

  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h6">Methods matcher</Typography>
      <Autocomplete
        multiple
        options={METHODS}
        {...(methodsField as any)}
        renderInput={params => (
          <TextField {...params} label="Methods" margin="normal" />
        )}
      />
    </Box>
  );
};

export default MethodsMatcherEditWidget;
