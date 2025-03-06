import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const GarageIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Garage',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Garage Icon</title>
      <path
        d="M21.79 6.10999L19.74 1.99999H4.26003L2.26003 6.10999C2.1027 6.38128 2.01349 6.68667 2.00003 6.99999V7.88999C1.99715 8.52477 2.18674 9.14551 2.54378 9.67037C2.90082 10.1952 3.40856 10.5995 4.00003 10.83V22H20V12L18 13V20H16V13H8.00003V20H6.00003V10.81C6.34132 10.6929 6.65946 10.5169 6.94003 10.29C7.08513 10.1685 7.21597 10.031 7.33003 9.87999C7.61122 10.2286 7.96689 10.5098 8.37094 10.703C8.77499 10.8962 9.21717 10.9964 9.66503 10.9964C10.1129 10.9964 10.5551 10.8962 10.9591 10.703C11.3632 10.5098 11.7188 10.2286 12 9.87999C12.2812 10.2286 12.6369 10.5098 13.0409 10.703C13.445 10.8962 13.8872 10.9964 14.335 10.9964C14.7829 10.9964 15.2251 10.8962 15.6291 10.703C16.0332 10.5098 16.3888 10.2286 16.67 9.87999C16.7841 10.031 16.9149 10.1685 17.06 10.29C17.39 10.5797 17.7795 10.7934 18.2011 10.9161C18.6227 11.0388 19.0661 11.0674 19.5 11C20.2171 10.8607 20.8617 10.472 21.3193 9.90263C21.777 9.3333 22.0182 8.62024 22 7.88999V6.99999C22.0019 6.69083 21.93 6.38569 21.79 6.10999ZM10 15H14V20H10V15ZM20 7.88999C20.0124 8.14121 19.9375 8.38898 19.7881 8.59129C19.6386 8.7936 19.4238 8.93799 19.18 8.99999C19.0333 9.02592 18.8826 9.01872 18.739 8.97893C18.5954 8.93913 18.4625 8.86775 18.35 8.76999C18.239 8.67501 18.1501 8.55685 18.0896 8.42382C18.0291 8.29079 17.9986 8.14612 18 7.99999V6.99999H15.33V7.99999C15.33 8.26521 15.2247 8.51956 15.0371 8.7071C14.8496 8.89464 14.5952 8.99999 14.33 8.99999C14.0648 8.99999 13.8105 8.89464 13.6229 8.7071C13.4354 8.51956 13.33 8.26521 13.33 7.99999V6.99999H10.67V7.99999C10.67 8.26521 10.5647 8.51956 10.3771 8.7071C10.1896 8.89464 9.93525 8.99999 9.67003 8.99999C9.40482 8.99999 9.15046 8.89464 8.96293 8.7071C8.77539 8.51956 8.67003 8.26521 8.67003 7.99999V6.99999H6.00003V7.99999C6.00004 8.14443 5.96876 8.28716 5.90834 8.41836C5.84792 8.54955 5.7598 8.66611 5.65003 8.75999C5.53843 8.8595 5.40593 8.93272 5.26229 8.97426C5.11865 9.01579 4.96752 9.02459 4.82003 8.99999C4.57627 8.93799 4.36145 8.7936 4.212 8.59129C4.06254 8.38898 3.98766 8.14121 4.00003 7.88999V6.99999L5.50003 3.99999H18.5L20 6.99999V7.88999Z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
