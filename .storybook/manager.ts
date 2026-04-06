import { addons } from 'storybook/manager-api';
import sigaTheme from './theme';

addons.setConfig({
    theme: sigaTheme as any,
});