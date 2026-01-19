'use client';

import React, { FC, PropsWithChildren } from 'react';
import { useSlotRecipe } from '@chakra-ui/react';

import { useI18n } from 'src/utilities/i18nInit';
import { Language } from 'src/types/language';
import { CloseIcon } from 'src/components/icons';

import { SimpleGrid } from '../simpleGrid';
import { Link } from '../link';
import { Box } from '../box';

export interface GalleryHeaderProps {
  currentSlide: number;
  slidesCount: number;
  onClose: () => void;
  language: Language;
}

export const GalleryHeaderContent: FC<
  PropsWithChildren<GalleryHeaderProps>
> = ({ currentSlide, slidesCount, onClose, children }) => {
  const { t } = useI18n();
  const recipe = useSlotRecipe({ key: 'galleryHeader' });
  const styles = recipe();

  return (
    <Box css={styles.container}>
      <Box css={styles.grid}>
        <SimpleGrid
          columns={{
            base: 2,
            md: 3,
          }}
          alignItems="center"
        >
          <Box hideBelow="md">{children}</Box>
          <Box css={styles.countContainer}>
            <Box>
              {t('galleryHeader.imageCount', {
                x: currentSlide,
                of: slidesCount,
              })}
            </Box>
          </Box>
          <Box css={styles.closeContainer}>
            <Link aria-label="Close gallery" onClick={() => onClose()}>
              <CloseIcon color="white" />
            </Link>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};
