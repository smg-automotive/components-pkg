import React, { FC, useMemo } from 'react';
import { Container } from '@chakra-ui/react';

import { Language } from 'src/types/language';

import { Environment } from 'src/types/environment';

import { Brand } from 'src/types/brand';

import TranslationProvider from '../translationProvider';
import Divider from '../divider';
import Center from '../center';
import Box from '../box';

import SocialMedia from './SocialMedia';
import FooterSectionGrid from './SectionGrid';
import FooterLanguageNavigation from './LanguageNavigation';
import FooterCopyright from './Copyright';
import { FooterConfig } from './config/factory';
import { footerConfig } from './config';
import FooterCompanies from './Companies';

interface FooterProps {
  brand: Brand;
  language: Language;
  environment?: Environment;
  useAbsoluteUrls?: boolean;
}

const Footer: FC<FooterProps> = ({
  brand,
  language,
  environment,
  useAbsoluteUrls,
}) => {
  const config = useMemo(() => {
    const footerConfigInstance = new FooterConfig({
      config: footerConfig,
      brand,
      environment,
      useAbsoluteUrls,
    });
    return footerConfigInstance.getMappedConfig();
  }, [brand, environment, useAbsoluteUrls]);

  return (
    <TranslationProvider language={language} scopes={['footer']}>
      <footer>
        <Box
          width="full"
          background="gray.900"
          color="white"
          paddingTop={{ base: 0, md: 'md' }}
          paddingBottom={{ base: 'lg', md: '2xl' }}
        >
          <Center>
            <Container
              width="full"
              maxWidth="container.xl"
              paddingX={{ base: 0, md: 'lg' }}
            >
              <FooterSectionGrid config={config} />
              <FooterLanguageNavigation />
              <SocialMedia config={config} />
            </Container>
          </Center>
          <Divider borderColor="gray.700" />
          <Center>
            <Container width="full" maxWidth="container.xl" paddingX="lg">
              <FooterCompanies config={config} />
              <FooterCopyright />
            </Container>
          </Center>
        </Box>
      </footer>
    </TranslationProvider>
  );
};

export default Footer;
