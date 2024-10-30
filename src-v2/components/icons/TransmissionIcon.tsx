import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const TransmissionIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Transmission',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Transmission icon</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3-1a3.001 3.001 0 0 1-2 2.83V11h6V7.83a3.001 3.001 0 1 1 2 0V11h6V7.83a3.001 3.001 0 1 1 2 0V13h-8v3.171a3.001 3.001 0 1 1-2 0v-3.17H5v3.17a3.001 3.001 0 1 1-2 0V7.83A3.001 3.001 0 1 1 7 5Zm14 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-9 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm1-13a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM4 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm13-2h1.994c.763 0 1.402.133 1.856.462.473.342.697.858.697 1.505 0 .509-.138.93-.424 1.249-.19.213-.433.365-.71.472L22 22h-1.767l-1.39-2.092h-.29V22H17v-6Zm1.554 1.363v1.2h.448c.404 0 .642-.06.774-.148.105-.071.184-.187.184-.448 0-.262-.079-.38-.186-.453-.132-.09-.37-.151-.772-.151h-.448Z"
        clipRule="evenodd"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
