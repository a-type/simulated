import React, { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import { graphql, useFragment } from 'relay-hooks';

export interface MatcherEditWidgetProps {
  matcher: any;
}

const matcherFragment = graphql`
  fragment MatcherEditWidget_matcher on Matcher {
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
`;

const useStyles = makeStyles<Theme, MatcherEditWidgetProps>(theme => ({}));

const MatcherEditWidget: FC<MatcherEditWidgetProps> = props => {
  const {} = props;
  const classes = useStyles(props);

  const matcher = useFragment(matcherFragment, props.matcher);

  // TODO: edit
  switch (matcher.kind) {
    case 'path':
      return <div>Path: {matcher.path}</div>;
    case 'methods':
      return <div>Methods: {matcher.methods}</div>;
    case 'body':
      return <div>Body: {matcher.body}</div>;
    case 'headers':
      return <div>Headers: {matcher.headers.length}</div>;
    default:
      return <div>Unknown matcher</div>;
  }
};

export default MatcherEditWidget;