import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const TimeIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Time',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Time icon</title>
      <path d="M13 6V11.5L16.6 14.2L15.4 15.8L11 12.5V7L13 6Z" fill="#333333" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.4443 3.6853C8.08879 2.58649 10.0222 2 12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7363 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12C22 13.9778 21.4135 15.9112 20.3147 17.5557C19.2159 19.2002 17.6541 20.4819 15.8268 21.2388C13.9996 21.9957 11.9889 22.1937 10.0491 21.8079C8.10929 21.422 6.32746 20.4696 4.92894 19.0711C3.53041 17.6725 2.578 15.8907 2.19215 13.9509C1.8063 12.0111 2.00433 10.0004 2.76121 8.17317C3.51809 6.3459 4.79981 4.78412 6.4443 3.6853ZM7.55544 18.6518C8.87104 19.5308 10.4178 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1572 16.1566 20 14.1217 20 12C20 10.4177 19.5308 8.87103 18.6518 7.55544C17.7727 6.23984 16.5233 5.21447 15.0615 4.60896C13.5997 4.00346 11.9911 3.84504 10.4393 4.15372C8.88743 4.4624 7.46197 5.22433 6.34315 6.34315C5.22433 7.46197 4.4624 8.88743 4.15372 10.4393C3.84504 11.9911 4.00347 13.5997 4.60897 15.0615C5.21447 16.5233 6.23985 17.7727 7.55544 18.6518Z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});