import React, { FC } from 'react';
import localFont from '@next/font/local';
import { Global } from '@emotion/react';

const makeItSans = localFont({
  src: [
    {
      path: '../assets/fonts/MakeItSans-Bold.woff',
      weight: '400',
      style: 'regular',
    },
    {
      path: '../assets/fonts/MakeItSans-Regular.woff2',
      weight: '400',
      style: 'regular',
    },
    {
      path: '../assets/fonts/MakeItSans-Regular.otf',
      weight: '400',
      style: 'regular',
    },
    {
      path: '../assets/fonts/MakeItSans-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../assets/fonts/MakeItSans-Bold.otf',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../assets/fonts/MakeItSans-Bold.woff',
      weight: '700',
      style: 'bold',
    },
  ],
  fallback: ['Arial', 'Helvetica', 'Sans-Serif'],
});

const Fonts: FC = () => (
  <Global
    styles={`
      :root {
         --font-primary: ${makeItSans.style.fontFamily};
      }
    `}
  />
);

export default Fonts;
