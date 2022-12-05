import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const CalendarIcon = createIcon({
  displayName: 'Calendar',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16 2v4M8 2v4M3 9h18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M19 4H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7.013 12.729a.25.25 0 1 0 .002.5.25.25 0 0 0-.002-.5M12.013 12.729a.25.25 0 1 0 .002.5.25.25 0 0 0-.002-.5M17.013 12.729a.25.25 0 1 0 .002.5.25.25 0 0 0-.002-.5M7.013 16.729a.25.25 0 1 0 .002.5.25.25 0 0 0-.002-.5M12.013 16.729a.25.25 0 1 0 .002.5.25.25 0 0 0-.002-.5"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
    fill: 'none',
  },
});
