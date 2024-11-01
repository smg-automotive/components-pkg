import React, { FC } from 'react';
import { Global } from '@emotion/react';

const Fonts: FC = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Make It Sans';
        font-style: regular;
        font-weight: 400;
        src: url('/assets/fonts/MakeItSans-Regular.woff') format('woff'),
            url('/assets/fonts/MakeItSans-Regular.woff2') format('woff2'),
            url('/assets/fonts/MakeItSans-Regular.otf') format('otf');
      }
      @font-face {
        font-family: 'Make It Sans';
        font-style: bold;
        font-weight: 700;
        src: url('/assets/fonts/MakeItSans-Bold.woff') format('woff'),
            url('/assets/fonts/MakeItSans-Bold.woff2') format('woff2'),
            url('/assets/fonts/MakeItSans-Bold.otf') format('otf');
      }

      :root {
        --font-primary: 'Make It Sans', Arial, Helvetica, Sans-Serif
      }
    `}
  />
);

export default Fonts;
