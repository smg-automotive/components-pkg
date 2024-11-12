import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const PartialClockIcon = createIcon({
  displayName: 'Partial Clock',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Parital clock icon</title>
      <path
        d="M13.0008 11.5V6L11.0008 7V12.5L15.4008 15.8L16.6008 14.2L13.0008 11.5Z"
        fill="currentColor"
      />
      <path
        d="M6.08351 17.3839L4.72266 18.8578C4.79054 18.9298 4.85957 19.0009 4.92971 19.0711C6.32824 20.4696 8.11007 21.422 10.0499 21.8079C11.9897 22.1937 14.0004 21.9957 15.8276 21.2388C17.6549 20.4819 19.2167 19.2002 20.3155 17.5557C21.4143 15.9112 22.0008 13.9778 22.0008 12C22.0008 10.6868 21.7421 9.38642 21.2396 8.17317C20.737 6.95991 20.0004 5.85752 19.0718 4.92893C18.1433 4.00035 17.0409 3.26375 15.8276 2.7612C14.6144 2.25866 13.314 2 12.0008 2C12.0008 2 12.0008 2 12.0008 2L12.0008 4C13.0463 4 14.0869 4.20498 15.0622 4.60896C16.5241 5.21447 17.7735 6.23984 18.6525 7.55544C19.5316 8.87103 20.0008 10.4177 20.0008 12C20.0008 14.1217 19.1579 16.1566 17.6576 17.6569C16.1573 19.1571 14.1225 20 12.0008 20C10.4185 20 8.87181 19.5308 7.55622 18.6518C7.01274 18.2886 6.51879 17.8623 6.08351 17.3839Z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
