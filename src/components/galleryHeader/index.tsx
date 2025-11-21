import React, { FC, PropsWithChildren } from 'react';
import { useSlotRecipe } from '@chakra-ui/react';

import { I18nContext } from '@smg-automotive/i18n-pkg';

import { Language } from 'src/types/language';
import { TranslationProvider } from 'src/components/translationProvider';
import { CloseIcon } from 'src/components/icons';

import { Box } from '../box';
import { Link } from '../link';
import { SimpleGrid } from '../simpleGrid';
import { Text } from '../text';

export interface GalleryHeaderProps {
  currentSlide: number;
  slidesCount: number;
  onClose: () => void;
  language: Language;
}

export const GalleryHeader: FC<PropsWithChildren<GalleryHeaderProps>> = ({
  currentSlide,
  slidesCount,
  onClose,
  language,
  children,
}) => {
  const recipe = useSlotRecipe({ key: 'galleryHeader' });
  const styles = recipe();

  return (
    <TranslationProvider language={language} scopes={['galleryHeader']}>
      <I18nContext.Consumer>
        {({ t }) => (
          <Box css={styles.container}>
            <Box css={styles.grid}>
              <SimpleGrid
                columns={{
                  base: 2,
                  md: 3,
                }}
                alignItems="center"
              >
                <Box hideBelow="md" css={styles.childrenContainer}>
                  {children}
                </Box>
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
        )}
      </I18nContext.Consumer>
    </TranslationProvider>
  );
};
