import React, { FC, PropsWithChildren } from 'react';

import { chakra, useToken } from '@chakra-ui/react';

const Highlight: FC<PropsWithChildren> = ({ children }) => {
  const [brandPrimary] = useToken('colors', ['brand.primary']);

  return (
    <chakra.span
      backgroundImage={`url(//s2.svgbox.net/pen-brushes.svg?ic=brush-10&color=${brandPrimary.replace(
        '#',
        ''
      )});`}
      width="max-content"
      px="sm"
    >
      {children}
    </chakra.span>
  );
};

export default Highlight;
