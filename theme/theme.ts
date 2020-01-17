import { createMuiTheme } from '@material-ui/core';

export default createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#ffb677',
      dark: '#ff8364',
    },
    secondary: {
      main: '#5f6caf',
    },
  },
  props: {
    MuiTextField: {
      variant: 'outlined',
    },
  },
});
