import type { StorybookConfig } from "@storybook/react-webpack5";
import type { Configuration } from 'webpack';

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config: Configuration) => {
    // Ensure config.module is not undefined
    config.module = config.module || {};

    // Ensure config.module.rules is not undefined
    config.module.rules = config.module.rules || [];

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

    config.module.rules.push({
      test: /\.(avif)$/,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    });

    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias['react-native$'] = 'react-native-web';

    return config;
  },
};

export default config;
