import React, { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import { graphql, useFragment } from 'relay-hooks';
import { MatcherEditWidget_matcher$key } from './__generated__/MatcherEditWidget_matcher.graphql';
import PathMatcherEditWidget from './PathMatcherEditWidget';
import MethodsMatcherEditWidget from './MethodsMatcherEditWidget';
import BodyMatcherEditWidget from './BodyMatcherEditWidget';

export interface MatcherEditWidgetProps {
  mappingId: string;
  matcher: MatcherEditWidget_matcher$key;
}

const matcherFragment = graphql`
  fragment MatcherEditWidget_matcher on Matcher {
    kind
    ... on HeadersMatcher {
      headers {
        name
        value
      }
    }

    ...PathMatcherEditWidget_matcher
    ...MethodsMatcherEditWidget_matcher
    ...BodyMatcherEditWidget_matcher
  }
`;

const useStyles = makeStyles<Theme, MatcherEditWidgetProps>(theme => ({}));

const MatcherEditWidget: FC<MatcherEditWidgetProps> = props => {
  const { mappingId } = props;
  const classes = useStyles(props);

  const matcher = useFragment(matcherFragment, props.matcher);

  // TODO: edit
  switch (matcher.kind) {
    case 'path':
      return <PathMatcherEditWidget matcher={matcher} mappingId={mappingId} />;
    case 'methods':
      return (
        <MethodsMatcherEditWidget matcher={matcher} mappingId={mappingId} />
      );
    case 'body':
      return <BodyMatcherEditWidget matcher={matcher} mappingId={mappingId} />;
    case 'headers':
      return <div>Headers: {matcher.headers.length}</div>;
    default:
      return <div>Unknown matcher</div>;
  }
};

export default MatcherEditWidget;
