import React, { FC } from 'react';
import { makeStyles, Theme, AppBar, Toolbar, Button } from '@material-ui/core';
import Link from './Link';
import Logo from './Logo';
import DarkModeToggle from './DarkModeToggle';

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
        <Link underline="none" color="inherit" href="/">
          <Logo className={classes.title} />
        </Link>
        <div style={{ marginLeft: 'auto' }}>
          <DarkModeToggle />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
