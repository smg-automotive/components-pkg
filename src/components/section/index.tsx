import React, { ElementType, FC, ReactNode } from 'react';

import { Box, chakra, useMultiStyleConfig } from '@chakra-ui/react';

import Stack from '../stack';

interface Props {
  variant?: 'hero' | 'regular';
  title: string;
  text?: string;
  image?: () => ReactNode;
  as?: ElementType;
}

const Section: FC<Props> = ({
  as = chakra.div,
  title,
  text,
  image,
  variant,
  ...rest
}) => {
  const styles = useMultiStyleConfig('Section');
  const Component = chakra(as, {
    baseStyle: styles.section,
  });

  const titleStyle = {
    ...(variant === 'hero' ? styles.titleHero : styles.titleRegular),
  };

  const textStyle = {
    ...(variant === 'hero' ? styles.textHero : styles.textRegular),
  };

  return (
    <Component {...rest}>
      <Stack
        direction={{ xs: 'column', lg: 'row' }}
        spacing="xl"
        align={{ xs: 'center', lg: 'baseline' }}
      >
        {variant === 'hero' && image ? <Box>{image()}</Box> : null}
        <Stack spacing="md">
          <chakra.span __css={titleStyle}>{title}</chakra.span>
          {text ? <chakra.span __css={textStyle}>{title}</chakra.span> : null}
        </Stack>
      </Stack>
    </Component>
  );
};

export default Section;
