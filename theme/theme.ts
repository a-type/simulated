import { createMuiTheme } from '@material-ui/core';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

const basePalette: ThemeOptions['palette'] = {
  type: 'dark',
  primary: {
    main: '#f67280',
    dark: '#c06c84',
  },
  secondary: {
    main: '#f6a672',
  },
  background: {
    default: '#151515',
    paper: '#151a20',
  },
};

const { palette } = createMuiTheme({ palette: basePalette });

export default createMuiTheme({
  palette,
  shape: {
    borderRadius: 0,
  },
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: 'transparent',
      },
      root: {
        boxShadow: 'none',
        borderBottom: `1px solid black`,
      },
    },
    MuiPaper: {
      root: {},
    },
    MuiCard: {
      root: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ffffff80',
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
