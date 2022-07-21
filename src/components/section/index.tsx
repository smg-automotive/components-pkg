import React, { FC, ReactNode } from 'react';

import { Box, chakra, useMultiStyleConfig } from '@chakra-ui/react';

import Stack from '../stack';

interface Props {
  variant?: 'hero' | 'regular';
  title: string;
  text?: string;
  image?: () => ReactNode;
}

const Section: FC<Props> = ({ title, text, image, variant }) => {
  const styles = useMultiStyleConfig(`Section`, { variant });

  return (
    <Stack
      direction={{ xs: 'column', lg: 'row' }}
      spacing="xl"
      align={{ xs: 'center', lg: 'baseline' }}
    >
      {variant === 'hero' && image ? <Box>{image()}</Box> : null}
      <Stack spacing="md">
        <chakra.span __css={styles.title}>{title}</chakra.span>
        {text ? <chakra.span __css={styles.text}>{title}</chakra.span> : null}
      </Stack>
    </Stack>
  );
};

export default Section;
