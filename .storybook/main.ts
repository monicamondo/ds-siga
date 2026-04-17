import type { StorybookConfig } from '@storybook/angular';
import type { Configuration } from 'webpack';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  staticDirs: ['../public'],
  webpackFinal: async (config: Configuration) => {
    if (process.env['NODE_ENV'] === 'production') {
      config.output = config.output ?? {};
      config.output.publicPath = '/ds-siga/';
    }
    return config;
  },
};

export default config;