import React, { FC } from 'react';

import { I18nContext } from '@smg-automotive/i18n-pkg';

import { Language } from 'src/types/language';
import TranslationProvider from 'src/components/translationProvider';
import SimpleGrid from 'src/components/simpleGrid';
import Show from 'src/components/show';
import Link from 'src/components/link';
import { CloseIcon } from 'src/components/icons';

import Box from 'src/components/box';

interface GalleryHeaderProps {
  currentSlide: number;
  slidesCount: number;
  onClose: () => void;
  titleComponent: () => React.ReactNode;
  language: Language;
  businessLinkComponent?: () => React.ReactNode;
}

const GalleryHeader: FC<GalleryHeaderProps> = ({
  currentSlide,
  slidesCount,
  onClose,
  titleComponent,
  language,
  businessLinkComponent,
}) => {
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
              <Show above="md">{titleComponent()}</Show>
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
            {businessLinkComponent ? businessLinkComponent() : null}
          </Box>
        )}
      </I18nContext.Consumer>
    </TranslationProvider>
  );
};

export default GalleryHeader;
