import type { Preview } from '@storybook/angular';

const preview: Preview = {
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