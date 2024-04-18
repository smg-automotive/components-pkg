import React, { FC, ReactNode } from 'react';

import {
  Box,
  chakra,
  ResponsiveValue,
  useMultiStyleConfig,
} from '@chakra-ui/react';

import { Sizes } from 'src/themes';

import Stack from '../stack';

export interface Props {
  variant?: 'hero' | 'regular';
  title: string;
  text?: string;
  image?: ReactNode;
  maxImgW?: ResponsiveValue<Sizes>;
}

const Section: FC<Props> = ({
  title,
  text,
  image,
  variant,
  maxImgW = '2xl',
}) => {
  const styles = useMultiStyleConfig(`Section`, { variant });

  return (
    <Stack direction={{ '2xs': 'column', md: 'row' }} spacing="xl">
      {image ? (
        <Box maxW={maxImgW} flexShrink={0}>
          {image}
        </Box>
      ) : null}
      <Stack spacing="md">
        <chakra.span __css={styles.title}>{title}</chakra.span>
        {text ? <chakra.span __css={styles.text}>{text}</chakra.span> : null}
      </Stack>
    </Stack>
  );
};

export default Section;
