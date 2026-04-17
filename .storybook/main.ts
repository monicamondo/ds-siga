import type { StorybookConfig } from '@storybook/angular';

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
  webpackFinal: async (config: any, { configType }: { configType: string }) => {
    if (configType === 'PRODUCTION') {
      config.output = config.output ?? {};
      config.output.publicPath = '';
    }
    return config;
  },
};

export default config;