import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const SwissFlagIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'SwissFlag',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Swiss Flag icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 4V20H4V4H20ZM13.7149 6.73171H10.6749L10.6747 10.284L7.12195 10.2843V13.3251L10.6747 13.3249L10.6749 16.878H13.7149L13.7148 13.3249L17.2683 13.3251V10.2843L13.7148 10.284L13.7149 6.73171Z"
        fill="#EA1C09"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
