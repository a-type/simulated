import { Link as MuiLink, LinkProps as MuiLinkProps } from '@material-ui/core';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { forwardRef } from 'react';

export type LinkProps = MuiLinkProps & NextLinkProps;

function Link(
  {
    as,
    href,
    shallow,
    replace,
    scroll,
    passHref,
    prefetch,
    ...props
  }: LinkProps,
  ref,
) {
  return (
    <NextLink
      as={as}
      href={href}
      shallow={shallow}
      replace={replace}
      scroll={scroll}
      passHref
      ref={ref}
    >
      <MuiLink {...props} />
    </NextLink>
  );
}

export default forwardRef(Link);
