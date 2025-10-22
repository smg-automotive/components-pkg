import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const BalanceIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Balance',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Balance Icon</title>
      <path
        fill="currentColor"
        d="M13 6H22V8H18.9395L21.9365 16.0352L22 16.3848V17.5381C22 20.0125 19.9748 22 17.5 22C15.0252 22 13 20.0125 13 17.5381V16.3848L13.0635 16.0352L16.0605 8H7.93945L10.9365 16.0352L11 16.3848V17.5381C11 20.0125 8.97483 22 6.5 22C4.02517 22 2 20.0125 2 17.5381V16.3848L2.06348 16.0352L5.06055 8H2V6H11V2H13V6ZM4 17.5381C4 18.8872 5.10884 20 6.5 20C7.89116 20 9 18.8872 9 17.5381V17.3848H4V17.5381ZM15 17.5381C15 18.8872 16.1088 20 17.5 20C18.8912 20 20 18.8872 20 17.5381V17.3848H15V17.5381ZM4.43945 15.3848H8.56055L6.5 9.86035L4.43945 15.3848ZM15.4395 15.3848H19.5605L17.5 9.86035L15.4395 15.3848Z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
