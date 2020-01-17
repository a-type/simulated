import React, { FC } from 'react';
import {
  makeStyles,
  Theme,
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import Link from './Link';

export interface NavigationProps {}

const useStyles = makeStyles<Theme, NavigationProps>(theme => ({
  title: {
    fontSize: theme.typography.pxToRem(24),
    marginRight: theme.spacing(2),
  },
}));

const Navigation: FC<NavigationProps> = props => {
  const {} = props;
  const classes = useStyles(props);

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h1" className={classes.title}>
          Simulated
        </Typography>
        <Link href="/">Home</Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
