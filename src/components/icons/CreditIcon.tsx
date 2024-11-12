import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const CreditIcon = createIcon({
  displayName: 'Credit',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Credit icon</title>
      <path
        d="M12 1.93188L12.3511 2.06356L20.3511 5.06356L21 5.30689V5.99989V7.99989V8.99989H20H4H3V7.99989V5.99989V5.30688L3.64888 5.06356L11.6489 2.06356L12 1.93188ZM5 6.69289V6.99989H19V6.69288L12 4.06789L5 6.69289ZM3 9.99989H4H7H8V10.9999V16.9999V17.9999H6V16.9999V11.9999H5V16.9999V17.9999H3V16.9999V10.9999V9.99989ZM10.5 9.99989H9.5V10.9999V16.9999V17.9999H11.5V16.9999V11.9999H12.5V16.9999V17.9999H14.5V16.9999V10.9999V9.99989H13.5H10.5ZM16 9.99989H17H20H21V10.9999V16.9999V17.9999H19V16.9999V11.9999H18V16.9999V17.9999H16V16.9999V10.9999V9.99989ZM3 20.9999H21V18.9999H3V20.9999Z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
