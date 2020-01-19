import React, { FC } from 'react';
import { makeStyles, Theme, AppBar, Toolbar, Button } from '@material-ui/core';
import Link from './Link';
import Logo from './Logo';

export interface NavigationProps {}

const useStyles = makeStyles<Theme, NavigationProps>(theme => ({
  title: {
    fontSize: theme.typography.pxToRem(18),
    marginRight: theme.spacing(2),
  },
}));

const Navigation: FC<NavigationProps> = props => {
  const {} = props;
  const classes = useStyles(props);

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Logo component="h1" className={classes.title} />
        <Button component={Link} underline="none" href="/">
          Home
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
