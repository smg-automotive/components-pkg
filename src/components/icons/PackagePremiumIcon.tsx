import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const PackagePremiumIcon: ComponentWithAs<'svg', IconProps> = createIcon(
  {
    displayName: 'Premium',
    viewBox: '0 0 24 24',
    path: (
      <>
        <title>Premium package icon</title>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9999 1C18.071 1 23.0002 5.92923 23.0002 12.0003C23.0002 18.0714 18.071 23.0007 11.9999 23.0007C5.92881 23.0007 0.999573 18.0714 0.999573 12.0003C0.999573 5.92923 5.92881 1 11.9999 1ZM11.9999 3.00046C16.9668 3.00046 20.9998 7.03236 20.9998 12.0003C20.9998 16.9672 16.9668 21.0002 11.9999 21.0002C7.03304 21.0002 3.00003 16.9672 3.00003 12.0003C3.00003 7.03236 7.03304 3.00046 11.9999 3.00046Z"
          fill="#333333"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.8246 6.91233L12.0001 5.70874L9.61285 9.19215L5.56262 10.3854L8.13763 13.7326L8.02132 17.9537L12.0001 16.5388L15.979 17.9537L15.8627 13.7326L18.4377 10.3854L14.3874 9.19215L12.8246 6.91233ZM12.0001 9.24662L13.1397 10.9088L15.0728 11.4793L13.8434 13.0767L13.8994 15.0916L12.0001 14.4158L10.1009 15.0916L10.1561 13.0767L8.92677 11.4793L10.8606 10.9088L12.0001 9.24662Z"
          fill="#333333"
        />
      </>
    ),
    defaultProps: {
      boxSize: 'sm',
    },
  },
);
