import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const FlagIcon = createIcon({
  displayName: 'Flag',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Flag icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 21L4 22V3H6V4.5767L6.80936 4.32808C7.81609 4.01832 8.87732 3.92686 9.9222 4.05981C10.9672 4.19278 11.9719 4.54717 12.869 5.0993C13.5086 5.4928 14.2232 5.74891 14.9671 5.8512C15.7111 5.95349 16.4682 5.89978 17.1903 5.69348L17.2025 5.68998L21 4.70878V15.6723L17.7917 16.9797L17.739 16.9947C16.7497 17.2766 15.7125 17.3494 14.6935 17.2085C13.6746 17.0676 12.6962 16.7162 11.8206 16.1765C11.1657 15.7738 10.4325 15.5153 9.66982 15.4184C8.90696 15.3215 8.13158 15.3886 7.39664 15.6149L6 16.0439V21ZM7.39664 6.23992C8.13161 6.01371 8.90691 5.94675 9.66976 6.04382C10.4326 6.14088 11.166 6.39958 11.8209 6.80264C12.6969 7.34165 13.6757 7.69244 14.6947 7.83256C15.7093 7.97207 16.7418 7.89972 17.727 7.62014L19 7.29123V14.3277L17.1405 15.0854C16.4334 15.2795 15.6941 15.3278 14.9675 15.2274C14.2235 15.1245 13.5091 14.8678 12.8697 14.4737C11.9724 13.9218 10.9669 13.5672 9.9219 13.4344C8.87708 13.3017 7.81597 13.3933 6.80936 13.7031L6 13.9517V6.66894L7.39664 6.23992Z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
