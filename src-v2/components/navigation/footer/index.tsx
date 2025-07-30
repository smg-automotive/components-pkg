import React, { FC, useMemo } from 'react';
import { Container } from '@chakra-ui/react';

import { Project } from 'src/types/project';
import { Language } from 'src/types/language';

import { Environment } from 'src/types/environment';

import { Brand } from 'src/types/brand';

import TranslationProvider from 'src/components/translationProvider';
import Divider from 'src/components/divider';
import Center from 'src/components/center';
import Box from 'src/components/box';

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
  project?: Project;
}

const Footer: FC<FooterProps> = ({
  brand,
  language,
  environment,
  useAbsoluteUrls,
  project,
}) => {
  const config = useMemo(() => {
    const footerConfigInstance = new FooterConfig({
      config: footerConfig(),
      brand,
      environment,
      useAbsoluteUrls,
      project,
    });
    return footerConfigInstance.getMappedConfig();
  }, [brand, environment, useAbsoluteUrls, project]);

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
              maxWidth="container.2xl"
              paddingX={{ base: 0, md: 'xs' }}
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
