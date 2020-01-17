import { createMuiTheme } from '@material-ui/core';

export default createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#f67280',
      dark: '#c06c84',
    },
    secondary: {
      main: '#6c5b7b',
    },
    background: {
      default: '#091724',
      paper: '#284057',
    },
  },
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
