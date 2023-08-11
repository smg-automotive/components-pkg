import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const MotoScout24Icon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'MotoScout24',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>MotoScout24 icon</title>
      <g clipPath="url(#a)">
        <path
          fill="#fff"
          d="M20 0H4a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4Z"
        />
        <path
          fill="#FF4C52"
          d="M19.792 6.723c.09.068.165.146.209.277.07.21-.084.355-.24.502-.151.143-.305.288-.26.499.036.17.143.26.255.353.089.074.18.15.245.272.2.376.278.637.25 1.062-.01.14-.089.258-.163.368-.1.15-.192.285-.087.445.063.097.157.118.254.14a.456.456 0 0 1 .246.11c.193.193.126.414.055.654-.057.189-.117.39-.055.596.055.187.152.31.25.433.098.126.196.25.25.442.06.216.032.394.004.573-.027.17-.054.343-.004.552.054.23.197.506.317.71-9.27 3.82-17.421 2.56-18.819 2.269a.188.188 0 0 1-.142-.23c.044-.198.112-.514.143-.75.084-.622.033-1.538.01-1.872a.332.332 0 0 1 .072-.227c.142-.18.418-.576.418-.9 0-.304-.24-.668-.388-.863a.23.23 0 0 1 0-.275c.147-.195.388-.56.388-.862 0-.23-.12-.375-.244-.523-.112-.135-.226-.272-.256-.477-.046-.324.094-.552.237-.786.127-.21.258-.423.263-.714.001-.047.041-.083.087-.073 2.672.587 11.024-.134 16.705-1.705Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
