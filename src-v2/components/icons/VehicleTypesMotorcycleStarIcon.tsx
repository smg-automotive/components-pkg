import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const VehicleTypesMotorcycleStarIcon: ComponentWithAs<'svg', IconProps> =
  createIcon({
    displayName: 'VehicleTypesMotorcycleStarIcon',
    viewBox: '0 0 24 24',
    path: (
      <>
        <title>Vehicle types motorcycle star icon</title>
        <g fill="currentColor" clipPath="url(#a)">
          <path d="m12 10.5-2-1.37H8h.05L6.5 10.5 4 7H0l1 2h1.92l2.16 3.22A4 4 0 0 0 5 13l-2 3v4h3v4h6v-4h3v-4l-2-3q0-.323-.06-.64zM6 18H5v-1.4l.8-1.2.2.24zm4 4H8v-5.13a3.9 3.9 0 0 0 2 0zm-1-7a2 2 0 0 1-2-2 1.94 1.94 0 0 1 .55-1.37 2 2 0 0 1 2.9 0c.357.366.554.859.55 1.37a2 2 0 0 1-2 2m4 1.6V18h-1v-2.36l.2-.24z" />
          <path d="m6 10.5 2-1.37h2-.05l1.55 1.37 2-2 2 1-2.58 2.72q.078.386.08.78l2 3v4h-3v4H6v-4H3v-4l2-3q0-.323.06-.64zm6 7.5h1v-1.4l-.8-1.2-.2.24zm-4 4h2v-5.13a3.9 3.9 0 0 1-2 0zm1-7a2 2 0 0 0 2-2 1.94 1.94 0 0 0-.55-1.37 2 2 0 0 0-2.9 0A1.94 1.94 0 0 0 7 13a2 2 0 0 0 2 2m-4 1.6V18h1v-2.36l-.2-.24z" />
          <path d="m18 0 1.697 4.303L24 6l-4.303 1.697L18 12l-1.697-4.303L12 6l4.303-1.697z" />
          <path
            fillRule="evenodd"
            d="M9 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="currentColor" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </>
    ),
    defaultProps: {
      boxSize: 'sm',
    },
  });
