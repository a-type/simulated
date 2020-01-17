import App from 'next/app';
import Head from 'next/head';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { RelayEnvironmentProvider } from 'relay-hooks';
import initEnvironment from '../lib/createRelayEnvironment';
import Navigation from '../components/Navigation';
import theme from '../theme/theme';

const environment = initEnvironment();

class CustomApp extends App<{}> {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <RelayEnvironmentProvider environment={environment}>
        <ThemeProvider theme={theme}>
          <Head>
            <title>Simulated Admin</title>
          </Head>
          <CssBaseline />
          <Navigation />
          <Component {...pageProps} />
        </ThemeProvider>
      </RelayEnvironmentProvider>
    );
  }
}

export default CustomApp;
