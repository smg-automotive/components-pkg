/* eslint-disable unicorn/filename-case */
import React, { FC } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import localFont from '@next/font/local';

const makeItSans = localFont({
  src: [
    {
      path: '%fontPath%/MakeItSans-Regular.woff2',
      weight: '400',
      style: 'regular',
    },
    {
      path: '%fontPath%/MakeItSans-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
  ],
  fallback: ['Arial', 'Helvetica', 'Sans-Serif'],
});

const Fonts: FC = () => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <style jsx global>{`
    :root {
      --font-primary: ${makeItSans.style.fontFamily};
    }
  `}</style>
);

export default Fonts;
