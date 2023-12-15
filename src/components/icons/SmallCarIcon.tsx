import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const SmallCarIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Small-car',
  viewBox: '0 0 100 68',
  path: (
    <>
      <title id="smallCarTitle">Small-car icon</title>
      <path fill="#fff" d="M0 0h100v68H0z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M24.959 24.957c6.38-.344 18.007-.957 23.399-.957 3.049 0 6.833 1.593 10.387 3.444 2.34 1.219 4.705 2.62 6.79 3.855a180.08 180.08 0 0 0 3.009 1.759c.04.022.082.042.13.06l10.929 4.16a3 3 0 0 1 1.646 1.525L82 40.396a3 3 0 0 1 .197.552l.393 1.57a3 3 0 0 1 .09.728V48.5a2.5 2.5 0 0 1-2.5 2.5H64.85l-35.034-.5-14.04-.969a2.678 2.678 0 0 1-1.404-.515 2.396 2.396 0 0 1-.762-.908c-.77-1.647-.704-3.64-.384-5.367a18.877 18.877 0 0 1 1.454-4.475c.038-.08.065-.153.082-.221l.829-3.315a3 3 0 0 1 .66-1.257l6.624-7.506a2.99 2.99 0 0 1 2.084-1.01M48.358 26c-5.324 0-16.885.608-23.292.954a.991.991 0 0 0-.692.336l-6.623 7.506a1 1 0 0 0-.22.42l-.828 3.313c-.054.215-.13.415-.218.6a16.881 16.881 0 0 0-1.293 3.976c-.292 1.579-.277 3.071.23 4.157a.422.422 0 0 0 .136.143.679.679 0 0 0 .356.131l13.986.965L64.865 49H80.18a.5.5 0 0 0 .5-.5v-5.254a1 1 0 0 0-.03-.242l-.392-1.571a1 1 0 0 0-.066-.184l-.751-1.593a1 1 0 0 0-.549-.508l-10.928-4.16a2.956 2.956 0 0 1-.404-.19c-.965-.545-2.017-1.17-3.13-1.829-2.05-1.215-4.306-2.553-6.608-3.752C54.254 27.36 50.865 26 48.358 26"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M45 37h6l-1 2h-5zM28 37h6l-1 2h-5z" />
      <path
        fill="#fff"
        d="M28.358 48.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.858 44a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m-6.5 4.5a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        d="M77.358 48.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M71.858 44a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m-6.5 4.5a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M25 33h37l-2 2H23zM41 29l2-2v6h-2z" />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
