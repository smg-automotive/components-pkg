import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const PdfIcon = createIcon({
  displayName: 'Pdf',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>PDF icon</title>
      <path
        fill="currentColor"
        d="M18 18v2H6v-2H4v4h16v-5zM4 10V8l6-6h10v8h-2V4h-6v6zm6-5L7 8h3zm-2.042 7.386a2.13 2.13 0 0 0-1.405-1.228A6.2 6.2 0 0 0 5 11H4v6h1v-1.995a6.2 6.2 0 0 0 1.552-.159 2.13 2.13 0 0 0 1.406-1.227 2.76 2.76 0 0 0 0-1.233M5.995 14 5 14.002V12h1s1.073 0 1.036 1a1.026 1.026 0 0 1-1.041 1M19 12v-1h-4v6h1v-2h2v-1h-2v-2zm-5.033 1.886C13.927 11.931 12.79 11 10.913 11H9v6h1.913c1.877 0 3.014-.931 3.054-2.886v-.228M11 16h-1v-4h1a1.79 1.79 0 0 1 2.003 2A1.788 1.788 0 0 1 11 16"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
