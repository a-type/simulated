import React, { FC, useState, useCallback } from 'react';
import { makeStyles, Theme, Button, Menu, MenuItem } from '@material-ui/core';
import { graphql, useMutation, useFragment } from 'relay-hooks';

export enum MatcherKind {
  path = 'path',
  methods = 'methods',
  body = 'body',
  headers = 'headers',
}

export interface AddMatcherWidgetProps {
  availableKinds: MatcherKind[];
  mapping: any;
}

const addMatcherMutation = graphql`
  mutation AddMatcherWidget_addMatcherMutation(
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
  fragment AddMatcherWidget_mapping on Mapping {
    id
  }
`;

const useStyles = makeStyles<Theme, AddMatcherWidgetProps>(theme => ({}));

const AddMatcherWidget: FC<AddMatcherWidgetProps> = props => {
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

  const [mutate] = useMutation(addMatcherMutation, {});

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
          <MenuItem onClick={makeMenuHandler(kind)}>{kind}</MenuItem>
        ))}
      </Menu>
    </>
  );
};

const getEmptyMatcher = (kind: MatcherKind) => {
  switch (kind) {
    case MatcherKind.path:
      return {
        path: '/foo',
      };
    case MatcherKind.body:
      return {
        body: '{ "foo": "bar" }',
        ignoreWhitespace: true,
      };
    case MatcherKind.methods:
      return {
        methods: ['GET'],
      };
    case MatcherKind.headers:
      return {
        headers: [],
      };
  }
};

export default AddMatcherWidget;
