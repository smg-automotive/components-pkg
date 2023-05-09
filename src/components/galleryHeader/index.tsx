import React, { FC } from 'react';

import {
  Box,
  CloseIcon,
  H1,
  H2,
  Link,
  Show,
  SimpleGrid,
} from 'src/components/index';

const GalleryHeader: FC<{
  currentSlide: number;
  slidesCount: number;
  onClose: () => void;
  title?: string;
  subtitle?: string;
}> = ({ currentSlide, slidesCount, onClose, title, subtitle }) => {
  return (
    <Box
      color="white"
      bg="black"
      px="2xl"
      py="lg"
      position={{
        base: 'fixed',
        md: 'static',
      }}
      top={0}
      left={0}
      right={0}
      zIndex={1}
    >
      <SimpleGrid
        columns={{
          base: 2,
          md: 3,
        }}
        alignItems="center"
      >
        <Show above="md">
          <>
            {title && <H1 textStyle="body-large">title</H1>}
            {subtitle && <H2 textStyle="body-large">subtitle</H2>}
          </>
        </Show>
        <Box
          textAlign={{
            base: 'left',
            md: 'center',
          }}
        >
          {currentSlide} / {slidesCount}
        </Box>
        <Box textAlign="right">
          <Link onClick={() => onClose()}>
            <CloseIcon color="white" />
          </Link>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default GalleryHeader;
