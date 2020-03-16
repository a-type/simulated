import {
  Link as MuiLink,
  LinkProps as MuiLinkProps,
  makeStyles,
} from '@material-ui/core';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { forwardRef } from 'react';

export type LinkProps = MuiLinkProps &
  NextLinkProps & {
    disabled?: boolean;
  };

const useStyles = makeStyles(theme => ({
  disabled: {
    color: theme.palette.text.disabled,
  },
}));

const Link = forwardRef<NextLink, LinkProps>(
  (
    {
      as,
      href,
      shallow,
      replace,
      scroll,
      passHref,
      prefetch,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const classes = useStyles({});

    if (disabled) {
      return (
        <MuiLink component="span" className={classes.disabled} underline="none">
          {children}
        </MuiLink>
      );
    }

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
        <MuiLink {...props}>{children}</MuiLink>
      </NextLink>
    );
  },
);

export default Link;
