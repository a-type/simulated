import App from 'next/app';
import Head from 'next/head';
import {
  CssBaseline,
  ThemeProvider,
  Button,
  CircularProgress,
  Box,
} from '@material-ui/core';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import initEnvironment from '../lib/createRelayEnvironment';
import { lightTheme, darkTheme } from '../theme/theme';
import { DarkModeProvider, useDarkMode } from '../contexts/DarkModeContext';
import { SnackbarProvider, withSnackbar, WithSnackbarProps } from 'notistack';
import { useRef, Suspense, Component, FC } from 'react';
import { WarningTwoTone } from '@material-ui/icons';

const environment = initEnvironment();

class ErrorBoundary extends Component<
  WithSnackbarProps,
  { hasError: boolean }
> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    this.props.enqueueSnackbar('An error prevented this page from loading', {
      variant: 'error',
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box
          width="100%"
          p={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <WarningTwoTone />
        </Box>
      );
    }

    return this.props.children;
  }
}

const ConnectedErrorBoundary = withSnackbar(ErrorBoundary);

const AppInternal: FC<{ Component: any; pageProps: any }> = ({
  Component,
  pageProps,
}) => {
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
        <Suspense fallback={<CircularProgress />}>
          <ConnectedErrorBoundary>
            <Component {...pageProps} />
          </ConnectedErrorBoundary>
        </Suspense>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

class CustomApp extends App<{}> {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
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
