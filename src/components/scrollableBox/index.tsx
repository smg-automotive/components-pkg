import React, { FC, PropsWithChildren, useEffect, useRef } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

interface ScrollableBoxProps extends BoxProps {
  indicatorHeight?:
    | string
    | Partial<{ base: string; sm: string; md: string; lg: string }>;
  gradient?: string;
  height?: string | number;
  withScrollSpace?: boolean;
}

const ScrollableBox: FC<PropsWithChildren<ScrollableBoxProps>> = ({
  children,
  indicatorHeight = 'md',
  gradient = 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 50%)',
  maxH,
  height = 'full',
  paddingX = 'md',
  withScrollSpace = true,
  ...rest
}) => {
  const scrollableRef = useRef<HTMLInputElement>(null);
  const indicatorRef = useRef<HTMLInputElement>(null);

  const handleScroll = () => {
    const scrollableElement = scrollableRef.current;
    const indicatorElement = indicatorRef.current;

    if (scrollableElement && indicatorElement) {
      const isScrolledToBottom =
        scrollableElement.scrollHeight - scrollableElement.scrollTop ===
        scrollableElement.clientHeight;

      if (isScrolledToBottom) {
        indicatorRef.current.style.opacity = '0';
        return;
      }

      if (indicatorElement.style.opacity === '0') {
        indicatorElement.style.opacity = '1';
      }
    }
  };

  useEffect(() => {
    const scrollableElement = scrollableRef.current;
    const indicatorElement = indicatorRef.current;

    if (scrollableElement && indicatorElement) {
      if (scrollableElement.scrollHeight > scrollableElement.clientHeight) {
        indicatorElement.style.display = 'block';
      }

      scrollableElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollableElement && indicatorElement) {
        scrollableElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <Box position="relative" top="0" bottom="0" left="0" right="0" {...rest}>
      <Box
        ref={scrollableRef}
        overflowY="auto"
        paddingX={withScrollSpace ? 'md' : '0'}
        h={height}
        maxH={maxH}
        w="full"
      >
        {children}
      </Box>
      <Box
        ref={indicatorRef}
        display="none"
        position="absolute"
        bottom="0"
        width={
          withScrollSpace ? 'calc(100% - 2 * var(--chakra-space-md))' : '100%'
        }
        left={withScrollSpace ? 'md' : '0'}
        height={indicatorHeight}
        background={gradient}
        transition="opacity 0.4s ease-in-out"
      />
    </Box>
  );
};

export default ScrollableBox;
