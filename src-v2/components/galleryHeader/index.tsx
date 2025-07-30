import React, { FC, PropsWithChildren } from 'react';

import { I18nContext } from '@smg-automotive/i18n-pkg';

import { Language } from 'src/types/language';
import TranslationProvider from 'src/components/translationProvider';
import SimpleGrid from 'src/components/simpleGrid';
import Show from 'src/components/show';
import Link from 'src/components/link';
import { CloseIcon } from 'src/components/icons';

import Box from 'src/components/box';

export interface GalleryHeaderProps {
  currentSlide: number;
  slidesCount: number;
  onClose: () => void;
  language: Language;
}

const GalleryHeader: FC<PropsWithChildren<GalleryHeaderProps>> = ({
  currentSlide,
  slidesCount,
  onClose,
  language,
  children,
}) => {
  return (
    <TranslationProvider language={language} scopes={['galleryHeader']}>
      <I18nContext.Consumer>
        {({ t }) => (
          <Box
            color="white"
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
              <Show above="md">{children}</Show>
              <Box
                textAlign={{
                  base: 'left',
                  md: 'center',
                }}
              >
                {t('galleryHeader.imageCount', {
                  x: currentSlide,
                  of: slidesCount,
                })}
              </Box>
              <Box textAlign="right">
                <Link aria-label="Close gallery" onClick={() => onClose()}>
                  <CloseIcon color="white" />
                </Link>
              </Box>
            </SimpleGrid>
          </Box>
        )}
      </I18nContext.Consumer>
    </TranslationProvider>
  );
};

export default GalleryHeader;
