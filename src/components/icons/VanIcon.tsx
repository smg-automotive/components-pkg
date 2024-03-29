import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const VanIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Van',
  viewBox: '0 0 100 68',
  path: (
    <>
      <title id="vanTitle">Van icon</title>
      <path fill="currentColor" d="M55 29h6l-1 2h-5zM15 25h60l-2 2H13z" />
      <path fill="currentColor" d="m51 18 2-2v11h-2zM29 18l2-2v11h-2z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.162 38a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-8 6a8 8 0 1 1 16 0 8 8 0 0 1-16 0M81.162 38a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-8 6a8 8 0 1 1 16 0 8 8 0 0 1-16 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m73.979 47-47-1 .042-2 47 1z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.708 14.695c-.002.002-.002.002 0 0-.415.43-.83 1.235-1.197 2.4-.359 1.137-.639 2.505-.852 3.95-.426 2.892-.57 5.991-.57 7.955v5.657l-.482 1.5v4.137l-1.18 1.83-.068.07c-.21.218-.296.383-.331.485a.38.38 0 0 0-.022.204c.01.049.032.098.06.144l7.002.475-.136 1.996-7.634-.519-.226-.156a2.518 2.518 0 0 1-1.03-1.556c-.154-.794.106-1.625.807-2.386l.758-1.175v-3.863l.483-1.5V29c0-2.036.147-5.237.59-8.246.222-1.504.521-2.986.924-4.261.393-1.248.921-2.417 1.666-3.188.318-.329.874-.645 1.591-.88.746-.245 1.738-.425 2.993-.425h.01l48.308.5h.005c1.004 0 2.399.221 3.727.586 1.315.36 2.715.902 3.645 1.624l.026.02 10.027 8.894 10.995 3.957.058.03c.742.385 1.788 1.122 2.559 2.133.748.982 1.306 2.329.892 3.863l.82.849.073.196c.425 1.146.917 2.952.991 4.667.07 1.612-.215 3.67-1.952 4.57-.658.34-1.693.85-2.668 1.277-.486.213-.972.412-1.395.56-.376.13-.844.274-1.229.274H87.14v-2h1.6c-.005 0 .037-.003.142-.03.112-.027.258-.071.435-.133.354-.123.787-.3 1.25-.503.926-.406 1.92-.896 2.552-1.222.581-.301.94-1.16.873-2.706-.059-1.355-.438-2.843-.798-3.865l-1.1-1.137v-1.061l.049-.15c.252-.783.02-1.528-.52-2.237-.532-.698-1.288-1.247-1.831-1.539l-11.229-4.041L68.3 16.27c-.62-.47-1.702-.922-2.924-1.257-1.22-.334-2.432-.514-3.203-.514h-.01L13.853 14h-.005c-1.062 0-1.84.153-2.365.325-.264.087-.46.177-.595.252-.117.065-.17.11-.181.118"
        clipRule="evenodd"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
