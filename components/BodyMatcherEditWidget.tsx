import React, { FC } from 'react';
import {
  makeStyles,
  Theme,
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import { useFragment, graphql } from 'react-relay/hooks';
import useSavingField from '../hooks/useSavingField';
import { BodyMatcherEditWidget_matcher$key } from './__generated__/BodyMatcherEditWidget_matcher.graphql';
import useMutation from '../hooks/useMutation';

export interface BodyMatcherEditWidgetProps {
  matcher: BodyMatcherEditWidget_matcher$key;
  mappingId: string;
}

const matcherFragment = graphql`
  fragment BodyMatcherEditWidget_matcher on Matcher {
    ... on BodyMatcher {
      body
      ignoreWhitespace
      regex
    }
  }
`;

const setMatcherMutation = graphql`
  mutation BodyMatcherEditWidget_setMatcherMutation(
    $input: AddMappingMatcherInput!
  ) {
    addMappingMatcher(input: $input) {
      mapping {
        matchers {
          ... on BodyMatcher {
            body
            ignoreWhitespace
            regex
          }
        }
      }
    }
  }
`;

const useStyles = makeStyles<Theme, BodyMatcherEditWidgetProps>(theme => ({}));

const BodyMatcherEditWidget: FC<BodyMatcherEditWidgetProps> = props => {
  const { mappingId } = props;
  const classes = useStyles(props);

  const matcher = useFragment(matcherFragment, props.matcher);
  console.debug(matcher)
  const [mutate] = useMutation(setMatcherMutation);

  const [bodyField, bodyFieldMeta] = useSavingField(
    matcher.body || '',
    async val => {
      await mutate({
        variables: {
          input: {
            mappingId,
            matcher: {
              body: {
                ...matcher,
                body: val,
              },
            },
          },
        },
      });
    },
  );

  const [ignoreWhitespaceField, ignoreWhitespaceFieldMeta] = useSavingField(
    !!matcher.ignoreWhitespace,
    async val => {
      await mutate({
        variables: {
          input: {
            mappingId,
            matcher: {
              body: {
                ...matcher,
                ignoreWhitespace: val,
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
              body: {
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
      <TextField {...bodyField} multiline label="Body" margin="normal" />
      <FormControlLabel
        control={<Checkbox {...ignoreWhitespaceField} />}
        label="Ignore whitespace"
      />
      <FormControlLabel
        control={<Checkbox {...regexField} />}
        label="Use RegEx"
      />
    </Box>
  );
};

export default BodyMatcherEditWidget;
