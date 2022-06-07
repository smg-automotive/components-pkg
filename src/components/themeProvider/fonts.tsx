import React from 'react';
import { Global } from '@emotion/react';

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Make It Sans';
        font-style: regular;
        font-weight: 400;
        src: url('https://www.financescout24.ch/portal-frontend-public/fonts/make-it-sans/MakeItSansWeb-Regular.woff') format('woff'),
            url('https://www.financescout24.ch/portal-frontend-public/fonts/make-it-sans/MakeItSansWeb-Regular.woff2') format('woff2');
      }
    
      @font-face {
        font-family: 'Make It Sans';
        font-style: bold;
        font-weight: 700;
        src: url('https://www.financescout24.ch/portal-frontend-public/fonts/make-it-sans/MakeItSansWeb-Bold.woff2') format('woff2'),
            url('https://www.financescout24.ch/portal-frontend-public/fonts/make-it-sans/MakeItSansWeb-Bold.woff') format('woff');
      }
    `}
  />
);
