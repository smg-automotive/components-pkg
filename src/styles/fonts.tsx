import React from 'react';
import { Global } from '@emotion/react';

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Make It Sans';
        font-style: regular;
        font-weight: 400;
        src: url('../assets/fonts/MakeItSans-Regular.woff2') format('woff2');
      }
    `}
  />
);
