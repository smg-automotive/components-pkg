import React, { FC, PropsWithChildren } from 'react';

import { Box } from '@chakra-ui/react';

import { Brand } from 'src/types/brand';
import whiteHighlight from 'src/assets/images/white_highlight.svg';
import ms24Highlight from 'src/assets/images/ms24_highlight.svg';
import as24Highlight from 'src/assets/images/as24_highlight.svg';

type HighlightProps = {
  variant: Brand.AutoScout24 | Brand.MotoScout24 | 'white';
};

const highlightVariant = {
  [Brand.AutoScout24]: as24Highlight,
  [Brand.MotoScout24]: ms24Highlight,
  white: whiteHighlight,
};

const Highlight: FC<PropsWithChildren<HighlightProps>> = ({
  variant,
  children,
}) => {
  return (
    <Box
      position="relative"
      overflow="hidden"
      width="max-content"
      minHeight="sm"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        zIndex="3"
        bgImage={highlightVariant[variant]}
        bgRepeat="no-repeat"
        bgSize="100% 100%"
      />
      <Box position="relative" width="100%" zIndex="5" paddingX="xs">
        {children}
      </Box>
    </Box>
  );
};

export default Highlight;
