import App from 'next/app';
import Head from 'next/head';
import { CssBaseline, ThemeProvider, Button } from '@material-ui/core';
import { RelayEnvironmentProvider } from 'relay-hooks';
import initEnvironment from '../lib/createRelayEnvironment';
import { lightTheme, darkTheme } from '../theme/theme';
import { DarkModeProvider, useDarkMode } from '../contexts/DarkModeContext';
import { SnackbarProvider } from 'notistack';
import { useRef } from 'react';

const environment = initEnvironment();

const AppInternal = ({ Component, pageProps }) => {
  const { dark } = useDarkMode();

  const notistackRef = useRef<any>();
  const onClickDismiss = (key: any) => () => {
    notistackRef.current?.closeSnackbar(key);
  };

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <SnackbarProvider
        ref={notistackRef}
        maxSnack={3}
        action={key => <Button onClick={onClickDismiss(key)}>Close</Button>}
      >
        <Head>
          <title>Simulated Admin</title>
        </Head>
        <CssBaseline />
        <Component {...pageProps} />
      </SnackbarProvider>
    </ThemeProvider>
  );
};

class CustomApp extends App<{}> {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    return (
      <RelayEnvironmentProvider environment={environment}>
        <DarkModeProvider>
          <AppInternal {...this.props} />
        </DarkModeProvider>
      </RelayEnvironmentProvider>
    );
  }
}

export default CustomApp;
