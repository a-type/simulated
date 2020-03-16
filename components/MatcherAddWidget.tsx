import React, { FC, useState, useCallback } from 'react';
import { makeStyles, Theme, Button, Menu, MenuItem } from '@material-ui/core';
import { graphql, useMutation, useFragment } from 'relay-hooks';
import useError from '../hooks/useError';

export enum MatcherKind {
  path = 'path',
  methods = 'methods',
  body = 'body',
  headers = 'headers',
}

export interface MatcherAddWidgetProps {
  availableKinds: MatcherKind[];
  mapping: any;
}

const addMatcherMutation = graphql`
  mutation MatcherAddWidget_addMatcherMutation(
    $input: AddMappingMatcherInput!
  ) {
    addMappingMatcher(input: $input) {
      mapping {
        matchers {
          kind
          ... on MethodsMatcher {
            methods
          }
          ... on PathMatcher {
            path
            regex
          }
          ... on BodyMatcher {
            body
            ignoreWhitespace
            regex
          }
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

const mappingFragment = graphql`
  fragment MatcherAddWidget_mapping on Mapping {
    id
  }
`;

const useStyles = makeStyles<Theme, MatcherAddWidgetProps>(theme => ({}));

const MatcherAddWidget: FC<MatcherAddWidgetProps> = props => {
  const { availableKinds, mapping: mappingKey } = props;
  const classes = useStyles(props);

  const mapping = useFragment(mappingFragment, mappingKey);

  const [anchorEl, setAnchorEl] = useState(null);
  const handleButtonClick = useCallback(
    ev => {
      setAnchorEl(ev.target);
    },
    [setAnchorEl],
  );
  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, [setAnchorEl]);

  const [mutate, { error }] = useMutation(addMatcherMutation, {});

  useError(error);

  const makeMenuHandler = (kind: MatcherKind) => async () => {
    await mutate({
      variables: {
        input: {
          mappingId: mapping.id,
          matcher: getEmptyMatcher(kind),
        },
      },
    });
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleButtonClick}>Add matcher...</Button>
      <Menu open={!!anchorEl} onClose={handleClose}>
        {availableKinds.map(kind => (
          <MenuItem key={kind} onClick={makeMenuHandler(kind)}>
            {kind}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

const getEmptyMatcher = (kind: MatcherKind) => {
  switch (kind) {
    case MatcherKind.path:
      return {
        path: {
          path: '/foo',
          regex: false,
        },
      };
    case MatcherKind.body:
      return {
        body: {
          body: '{ "foo": "bar" }',
          ignoreWhitespace: true,
          regex: false,
        },
      };
    case MatcherKind.methods:
      return {
        methods: {
          methods: ['GET'],
        },
      };
    case MatcherKind.headers:
      return {
        headers: {
          headers: [],
        },
      };
  }
};

export default MatcherAddWidget;
