import React, { FC } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';
import { Container } from '@chakra-ui/react';

import SocialMedia from './SocialMedia';
import FooterSectionGrid from './SectionGrid';
import FooterLanguageNavigation from './LanguageNavigation';
import FooterCopyright from './Copyright';
import { FooterConfig } from './config/factory';
import { footerConfig } from './config';
import FooterCompanies from './Companies';
import TranslationProvider from '../translationProvider';
import Divider from '../divider';
import Center from '../center';
import Box from '../box';
import { Language } from '../../types/language';
import { Environment } from '../../types/environment';
import { Brand } from '../../types/brand';

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
  const footerConfigInstance = new FooterConfig({
    config: footerConfig,
    brand,
    environment,
    useAbsoluteUrls,
  });
  const config = footerConfigInstance.getMappedConfig();
  const { t } = useI18n();

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
