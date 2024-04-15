import React, { FC, isValidElement, PropsWithChildren, ReactNode } from 'react';

import { Box } from '@chakra-ui/react';

import whiteHighlight from 'src/assets/images/white_highlight.svg';
import ms24Highlight from 'src/assets/images/ms24_highlight.svg';
import as24Highlight from 'src/assets/images/as24_highlight.svg';

type HighlightProps = {
  variant: 'as24' | 'ms24' | 'white';
};

const getTextFromChildren = (child: ReactNode): string => {
  let text = '';

  if (Array.isArray(child)) {
    child.forEach((nestedChild) => {
      text += getTextFromChildren(nestedChild);
    });
  } else if (typeof child === 'string' || typeof child === 'number') {
    text += child.toString();
  } else if (isValidElement(child) && child.props.children) {
    text += getTextFromChildren(child.props.children);
  }
  return text;
};

const highlightVariant = {
  as24: as24Highlight,
  ms24: ms24Highlight,
  white: whiteHighlight,
};

const Highlight: FC<PropsWithChildren<HighlightProps>> = ({
  variant,
  children,
}) => {
  const textLength = getTextFromChildren(children)?.length || 0;

  return (
    <Box
      bgImage={highlightVariant[variant]}
      bgRepeat="no-repeat"
      bgPosition="center"
      bgSize={textLength > 22 ? 'cover' : 'contain'}
      paddingLeft="xs"
      paddingRight={textLength <= 11 ? 'lg' : 'md'}
      width="fit-content"
      display="flex"
      justifyContent="center"
      height="auto"
    >
      <Box marginBottom="xxs">{children}</Box>
    </Box>
  );
};

export default Highlight;
