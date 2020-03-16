require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');
const RelayCompilerPlugin = require('relay-compiler-webpack-plugin');

const relayConfig = require('./relay.config');

module.exports = {
  reactStrictMode: true,
  experimental: {
    reactMode: 'concurrent',
  },
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),

      new RelayCompilerPlugin(relayConfig),
    ];

    return config;
  },
};
