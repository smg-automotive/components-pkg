import React from 'react';
import { Global } from '@emotion/react';

export const Fonts = () => (
  <Global
    styles={`
      /* latin-ext */
      @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        src: url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOXOhpKKSTj5PW.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
    `}
  />
);
