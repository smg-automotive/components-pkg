import React, { FC, PropsWithChildren } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

interface ScrollableBoxProps extends BoxProps {
  indicatorHeight?:
    | string
    | Partial<{
        base: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
      }>;
  gradient?: string;
  height?: string | number;
  scrollSpace?: string;
}

const ScrollableBox: FC<PropsWithChildren<ScrollableBoxProps>> = ({
  children,
  indicatorHeight = 'md',
  gradient = 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 50%)',
  maxH,
  height = 'full',
  scrollSpace = '2xl',
  ...rest
}) => {
  return (
    <Box position="relative" top="0" bottom="0" left="0" right="0" {...rest}>
      <Box
        overflowY="auto"
        paddingX={scrollSpace}
        h={height}
        maxH={maxH}
        w="full"
      >
        {children}
        <Box height={indicatorHeight} />
      </Box>
      <Box
        position="absolute"
        bottom="0"
        width={
          scrollSpace
            ? `calc(100% - 2 * var(--chakra-space-${scrollSpace}))`
            : '100%'
        }
        left={scrollSpace}
        height={indicatorHeight}
        background={gradient}
        transition="opacity 0.4s ease-in-out"
      />
    </Box>
  );
};

export default ScrollableBox;
