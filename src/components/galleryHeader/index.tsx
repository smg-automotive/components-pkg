import React, { FC } from 'react';

import { I18nContext } from '@smg-automotive/i18n-pkg';

import { Language } from 'src/types/language';
import TranslationProvider from 'src/components/translationProvider';
import SimpleGrid from 'src/components/simpleGrid';
import Show from 'src/components/show';
import Link from 'src/components/link';
import { CloseIcon } from 'src/components/icons';
import { H1, H2 } from 'src/components/heading';
import Box from 'src/components/box';

const GalleryHeader: FC<{
  currentSlide: number;
  slidesCount: number;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  language: Language;
}> = ({ currentSlide, slidesCount, onClose, title, subtitle, language }) => {
  return (
    <TranslationProvider language={language} scopes={['galleryHeader']}>
      <I18nContext.Consumer>
        {({ t }) => (
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
                {t('galleryHeader.imageCount', {
                  x: currentSlide,
                  of: slidesCount,
                })}
              </Box>
              <Box textAlign="right">
                <Link onClick={() => onClose()}>
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
