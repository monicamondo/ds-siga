import type { Preview } from '@storybook/angular';
import { applicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

const preview: Preview = {
  decorators: [
    applicationConfig({
      providers: [provideRouter([], withHashLocation())],
    }),
  ],
  parameters: {
    backgrounds: {
      default: 'siga',
      values: [
        { name: 'siga', value: '#F9F9F9' },
        { name: 'white', value: '#FFFFFF' },
        { name: 'dark', value: '#212121' },
      ],
    },
    layout: 'padded',
  },
};

export default preview;