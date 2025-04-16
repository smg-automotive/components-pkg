import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const SpeakerIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Speaker',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Speaker icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.08 8L14.08 5L15.08 4H16.5V20H15.09L14.09 19L11.09 16H2.5V8H11.08ZM4.5 14H5.5V10H4.5V14ZM11.91 14L14.5 16.59V7.41L11.91 10H7.5V14H11.91ZM17.7977 8.29175L19.7988 6.29064L21.2131 7.70485L19.2119 9.70596L17.7977 8.29175ZM22.5 11H19.5V13H22.5V11ZM5.5 18V20H11.5L9.5 18H5.5ZM19.2088 14.2945L17.7946 15.7087L19.7957 17.7099L21.2099 16.2956L19.2088 14.2945Z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
