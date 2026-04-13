import { create } from 'storybook/theming';

export default create({
    base: 'light',

    colorPrimary: '#12379C',
    colorSecondary: '#56C0D8',

    appBg: '#F9F9F9',
    appContentBg: '#FFFFFF',
    appPreviewBg: '#FFFFFF',
    appBorderColor: '#C2C2C2',
    appBorderRadius: 4,

    fontBase: 'Arial, Helvetica, "Lucida Sans", FreeSans, sans-serif',
    fontCode: '"Fira Code", "Courier New", monospace',

    textColor: '#0A0A0A',
    textInverseColor: '#FFFFFF',
    textMutedColor: '#757575',

    barTextColor: '#757575',
    barHoverColor: '#12379C',
    barSelectedColor: '#12379C',
    barBg: '#FFFFFF',

    brandTitle: 'SIGA Design System',
    brandImage: './siga-logo.png',
    brandTarget: '_self',
});