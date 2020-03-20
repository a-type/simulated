import React, { FC } from 'react';
import {
  makeStyles,
  Theme,
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
} from '@material-ui/core';
import { useFragment, graphql } from 'react-relay/hooks';
import useSavingField from '../hooks/useSavingField';
import { PathMatcherEditWidget_matcher$key } from './__generated__/PathMatcherEditWidget_matcher.graphql';
import useMutation from '../hooks/useMutation';

export interface PathMatcherEditWidgetProps {
  matcher: PathMatcherEditWidget_matcher$key;
  mappingId: string;
}

const matcherFragment = graphql`
  fragment PathMatcherEditWidget_matcher on Matcher {
    ... on PathMatcher {
      path
      regex
    }
  }
`;

const setMatcherMutation = graphql`
  mutation PathMatcherEditWidget_setMatcherMutation(
    $input: AddMappingMatcherInput!
  ) {
    addMappingMatcher(input: $input) {
      mapping {
        matchers {
          ... on PathMatcher {
            path
            regex
          }
        }
      }
    }
  }
`;

const useStyles = makeStyles<Theme, PathMatcherEditWidgetProps>(theme => ({}));

const PathMatcherEditWidget: FC<PathMatcherEditWidgetProps> = props => {
  const { mappingId } = props;
  const classes = useStyles(props);

  const matcher = useFragment(matcherFragment, props.matcher);
  const [mutate] = useMutation(setMatcherMutation, {});

  const [pathField, pathFieldMeta] = useSavingField(
    matcher?.path || '',
    async val => {
      await mutate({
        variables: {
          input: {
            mappingId,
            matcher: {
              path: {
                ...matcher,
                path: val,
              },
            },
          },
        },
      });
    },
  );

  const [regexField, regexFieldMeta] = useSavingField(
    !!matcher.regex,
    async val => {
      await mutate({
        variables: {
          input: {
            mappingId,
            matcher: {
              path: {
                ...matcher,
                regex: val,
              },
            },
          },
        },
      });
    },
  );

  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h6">Path matcher</Typography>
      <TextField {...pathField} label="Path" margin="normal" />
      <FormControlLabel
        control={<Checkbox {...regexField} />}
        label="Use RegEx"
      />
    </Box>
  );
};

export default PathMatcherEditWidget;
