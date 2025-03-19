import React, { FC, ReactNode } from 'react';
import { Box, BoxProps, chakra } from '@chakra-ui/react';

import { Stack } from '../stack';

export type SectionProps = {
  // variant?: 'hero' | 'regular';
  title: string;
  text?: string;
  image?: ReactNode;
  maxImgW?: BoxProps['maxWidth'];
};

export const Section: FC<SectionProps> = ({
  // variant,
  title,
  text,
  image,
  maxImgW = '2xl',
  // ...props
}) => {
  // const styles = useMultiStyleConfig(`Section`, { variant });

  return (
    <Stack direction={{ '2xs': 'column', md: 'row' }} gap="xl">
      {image ? (
        <Box maxW={maxImgW} flexShrink={0}>
          {image}
        </Box>
      ) : null}
      <Stack gap="md">
        {/* <chakra.span css={styles.title}>{title}</chakra.span>
        {text ? <chakra.span css={styles.text}>{text}</chakra.span> : null} */}
        <chakra.span>{title}</chakra.span>
        {text ? <chakra.span>{text}</chakra.span> : null}
      </Stack>
    </Stack>
  );
};

Section.displayName = 'Section';
