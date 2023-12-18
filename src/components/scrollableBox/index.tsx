import React, { FC, PropsWithChildren, useEffect, useRef } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

interface ScrollableBoxProps extends BoxProps {
  indicatorHeight?:
    | string
    | { base: string; sm: string; md: string; lg: string };
  gradient?: string;
}

const ScrollableBox: FC<PropsWithChildren<ScrollableBoxProps>> = ({
  children,
  indicatorHeight = 'md',
  gradient = 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 50%)',
  maxH = '6xl',
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
        indicatorRef.current.style.display = 'none';
        return;
      }

      if (indicatorElement.style.display === 'none') {
        indicatorElement.style.display = 'block';
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
      if (scrollableElement) {
        scrollableElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <Box position="relative" h="full">
      <Box
        ref={scrollableRef}
        overflowY="auto"
        paddingX="2xl"
        maxH={maxH}
        {...rest}
      >
        {children}
      </Box>
      <Box
        display="none"
        ref={indicatorRef}
        position="absolute"
        bottom="0"
        width="100%"
        height={indicatorHeight}
        background={gradient}
      />
    </Box>
  );
};

export default ScrollableBox;
