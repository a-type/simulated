import React, { FC } from 'react';
import { makeStyles, Theme, IconButton } from '@material-ui/core';
import { useDarkMode } from '../contexts/DarkModeContext';
import { Brightness2, Brightness7 } from '@material-ui/icons';

export interface DarkModeToggleProps {}

const useStyles = makeStyles<Theme, DarkModeToggleProps>(theme => ({}));

const DarkModeToggle: FC<DarkModeToggleProps> = props => {
  const {} = props;
  const classes = useStyles(props);

  const { dark, set } = useDarkMode();

  return (
    <IconButton onClick={() => set(!dark)}>
      {dark ? <Brightness7 /> : <Brightness2 />}
    </IconButton>
  );
};

export default DarkModeToggle;
