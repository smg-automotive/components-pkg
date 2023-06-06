import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const RoadIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Road',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Road icon</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.03 21.758 6.97 2H9c0 .08-.01.161-.03.243L4.031 22H2c0-.08.01-.161.03-.242ZM22 22c0-.08-.01-.161-.03-.242L17.031 2H15c0 .08.01.161.03.243L19.97 22H22Zm-9 0v-6h-2v6h2ZM11 7V2h2v5h-2Zm2 2v5h-2V9h2Z"
        clipRule="evenodd"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
