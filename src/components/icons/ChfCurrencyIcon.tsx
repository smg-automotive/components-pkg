import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const ChfCurrencyIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Chf Currency',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Chf currency icon</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 11.8794C0 9.08867 1.81218 7 4.4414 7C6.3851 7 7.82848 7.98359 8.25285 9.4093L8.37838 9.83104L6.29251 10.7523L6.09524 10.2838C5.9442 9.92514 5.74316 9.66463 5.49617 9.49213C5.25159 9.32131 4.92807 9.21298 4.48918 9.21298C3.3664 9.21298 2.3967 10.2378 2.3967 11.8293C2.3967 13.4364 3.36892 14.4582 4.47723 14.4582C5.24539 14.4582 5.84229 14.1025 6.16966 13.4557L6.41948 12.9622L8.44229 14.2596L8.22763 14.6657C7.71124 15.6424 6.44253 16.6712 4.46529 16.6712C1.83612 16.6712 0 14.6332 0 11.8794ZM11.4151 7.17529H9.0542V16.4961H11.4151V12.8921H13.8919V16.4961H16.2767V7.17529H13.8919V10.6917H11.4151V7.17529ZM17.2843 7.17529H23.36V9.37575H19.6452V10.9544H23.1331V13.1424H19.6452V16.4961H17.2843V7.17529Z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
