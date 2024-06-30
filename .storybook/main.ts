import { StorybookConfig } from '@storybook/react-webpack5';
import type { Configuration } from 'webpack';

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-react-native-web",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config: Configuration) => {
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];

    // Add Babel loader for JS/TS files
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['react-native-web'],
          },
        },
      ],
    });

    // Add loaders for handling images, including .avif files
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|avif)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    });

    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias['react-native$'] = 'react-native-web';

    // Add polyfills for Node.js core modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "os": require.resolve("os-browserify/browser"),
      "tty": require.resolve("tty-browserify"),
    };

    return config;
  },
};

export default config;
