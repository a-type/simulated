import App from 'next/app';
import Head from 'next/head';
import { CssBaseline } from '@material-ui/core';
import { RelayEnvironmentProvider } from 'relay-hooks';
import initEnvironment from '../lib/createRelayEnvironment';

const environment = initEnvironment();

class CustomApp extends App<{}> {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <RelayEnvironmentProvider environment={environment}>
        <Head>
          <title>Simulated Admin</title>
        </Head>
        <CssBaseline />
        <Component {...pageProps} />
      </RelayEnvironmentProvider>
    );
  }
}

export default CustomApp;
