import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const ThreeSixtyIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'ThreeSixty',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Three sixty icon</title>
      <path
        fill="currentColor"
        d="M18.17 5.59C18.098 5.484 16.35 3 12 3S5.902 5.484 5.83 5.59L4.165 4.482C4.259 4.341 6.525 1 12 1s7.741 3.34 7.835 3.482zM12 23c-5.476 0-7.741-3.34-7.835-3.482l1.67-1.102C5.902 18.516 7.649 21 12 21s6.098-2.484 6.17-2.59l1.665 1.107C19.741 19.66 17.475 23 12 23zM2 14.88l.977-.854a1.47 1.47 0 0 0 1.36.866 1.195 1.195 0 0 0 1.36-1.213c0-.692-.652-1.211-1.528-1.211h-.562v-1.051H4c.91 0 1.584-.508 1.584-1.19A1.102 1.102 0 0 0 4.36 9.109a1.466 1.466 0 0 0-1.27.693l-.865-.877A2.587 2.587 0 0 1 4.36 8a2.274 2.274 0 0 1 2.528 2.17 1.613 1.613 0 0 1-1.45 1.709v.022A1.744 1.744 0 0 1 7 13.714 2.394 2.394 0 0 1 4.337 16 2.599 2.599 0 0 1 2 14.88zm6-2.77C8 9.478 8.948 8 10.639 8a2.206 2.206 0 0 1 2 .9l-.804.854a1.306 1.306 0 0 0-1.196-.646c-.948 0-1.463 1.016-1.463 2.898h.02a1.746 1.746 0 0 1 1.649-1.132A2.24 2.24 0 0 1 13 13.344 2.393 2.393 0 0 1 10.557 16C8.938 16 8 14.568 8 12.11zm3.794 1.305a1.306 1.306 0 0 0-1.175-1.455 1.346 1.346 0 0 0-1.247 1.478 1.322 1.322 0 0 0 1.216 1.454 1.33 1.33 0 0 0 1.206-1.478zM14 12.006C14 9.616 14.799 8 16.515 8 18.182 8 19 9.616 19 12.006c0 2.4-.818 3.994-2.485 3.994C14.799 16 14 14.407 14 12.006zm3.866 0c0-1.882-.384-2.91-1.351-2.91s-1.38 1.028-1.38 2.91c0 1.87.414 2.91 1.38 2.91s1.351-1.04 1.351-2.91zM20 9.5a1.411 1.411 0 0 1 1.511-1.446A1.387 1.387 0 0 1 23 9.5a1.381 1.381 0 0 1-1.489 1.445A1.405 1.405 0 0 1 20 9.5zm2.18 0a.665.665 0 0 0-.668-.755.674.674 0 0 0-.68.755.679.679 0 0 0 .68.755.67.67 0 0 0 .668-.755z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
