import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const SpeakerIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Speaker',
  viewBox: '0 0 21 17',
  path: (
    <>
      <title>Speaker icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.08 4.39746L12.08 1.39746L13.08 0.397461H14.5V16.3975H13.09L12.09 15.3975L9.09 12.3975H0.5V4.39746H9.08ZM2.5 10.3975H3.5V6.39746H2.5V10.3975ZM9.91 10.3975L12.5 12.9875V3.80746L9.91 6.39746H5.5V10.3975H9.91ZM15.7977 4.68921L17.7988 2.6881L19.2131 4.10231L17.2119 6.10342L15.7977 4.68921ZM20.5 7.39746H17.5V9.39746H20.5V7.39746ZM3.5 14.3975V16.3975H9.5L7.5 14.3975H3.5ZM17.2088 10.692L15.7946 12.1062L17.7957 14.1073L19.2099 12.6931L17.2088 10.692Z"
        fill="#333333"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
