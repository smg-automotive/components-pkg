import React, { FC, ReactNode } from 'react';

import {
  Box,
  chakra,
  ResponsiveValue,
  useMultiStyleConfig,
} from '@chakra-ui/react';

import Stack from '../stack';
import { Sizes } from '../../themes';

interface Props {
  variant?: 'page' | 'section';
  title: string;
  text?: string;
  image?: ReactNode;
  maxImgW?: ResponsiveValue<Sizes>;
}

const Title: FC<Props> = ({ title, text, image, variant, maxImgW = '2xl' }) => {
  const styles = useMultiStyleConfig(`Title`, { variant });

  return (
    <Stack direction={{ xs: 'column', lg: 'row' }} spacing="xl">
      {variant === 'page' && image ? <Box maxW={maxImgW}>{image}</Box> : null}
      <Stack spacing="md">
        <chakra.span __css={styles.title}>{title}</chakra.span>
        {text ? <chakra.span __css={styles.text}>{title}</chakra.span> : null}
      </Stack>
    </Stack>
  );
};

export default Title;
