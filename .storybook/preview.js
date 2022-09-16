import '../styles/globals.css';

import { Global } from '@emotion/react';
import * as NextImage from 'next/image';
import { GlobalStyles } from '../styles/global';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

const withGlobalStyles = (Story, context) => (
  <>
    <Global styles={GlobalStyles} />
    <Story {...context} />
  </>
);

export const decorators = [withGlobalStyles];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
