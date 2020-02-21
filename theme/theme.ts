import { createMuiTheme } from '@material-ui/core';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import colors from './colors';
import { generateShadows } from './shadows';

const darkPalette: ThemeOptions['palette'] = {
  type: 'dark',
  text: {
    primary: colors.white,
  },
  primary: {
    main: colors.bright,
  },
  secondary: {
    main: colors.dark,
  },
  background: {
    default: colors.black,
    paper: colors.medium,
  },
};
const lightPalette: ThemeOptions['palette'] = {
  type: 'light',
  text: {
    primary: colors.black,
  },
  primary: {
    main: colors.black,
  },
  secondary: {
    main: colors.medium,
  },
  background: {
    default: colors.bright,
    paper: colors.white,
  },
};

const { palette } = createMuiTheme({ palette: lightPalette });

export default createMuiTheme({
  palette,
  shape: {},
  shadows: generateShadows(),
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: 'transparent',
      },
    },
  },
  props: {
    MuiTextField: {
      variant: 'outlined',
    },
    MuiButton: {
      color: 'primary',
    },
  },
});
