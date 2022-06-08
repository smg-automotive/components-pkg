/* eslint-disable import/no-internal-modules */
import React from 'react';
import { Global } from '@emotion/react';

import makeItSansRegularWoff2 from '../../files/MakeItSans-Regular.woff2';
import makeItSansRegularWoff from '../../files/MakeItSans-Regular.woff';
import makeItSansRegularOtf from '../../files/MakeItSans-Regular.otf';
import makeItSansBoldWoff2 from '../../files/MakeItSans-Bold.woff2';
import makeItSansBoldWoff from '../../files/MakeItSans-Bold.woff';
import makeItSansBoldOtf from '../../files/MakeItSans-Bold.otf';

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Make It Sans';
        font-style: regular;
        font-weight: 400;
        src: url(${makeItSansRegularWoff}) format('woff'),
            url(${makeItSansRegularWoff2}) format('woff2'),
            url(${makeItSansRegularOtf}) format('otf');
      }
      @font-face {
        font-family: 'Make It Sans';
        font-style: bold;
        font-weight: 700;
        src: url(${makeItSansBoldWoff}) format('woff'),
            url(${makeItSansBoldWoff2}) format('woff2'),           
            url(${makeItSansBoldOtf}) format('otf');
      }
    `}
  />
);
