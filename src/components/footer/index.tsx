import React, { FC } from 'react';
import { Container, Flex, StackDivider } from '@chakra-ui/react';

import FooterSectionGrid from './SectionGrid';
import { FooterConfig } from './config/factory';
import { footerConfig } from './config';
import TranslationProvider from '../translationProvider';
import Text from '../text';
import Stack from '../stack';
import Link from '../link';
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from '../icons';
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
              <Center>
                <Stack
                  marginTop="12px"
                  spacing="24px"
                  direction="row"
                  divider={<StackDivider borderColor="gray.700" />}
                >
                  <Link href="#" color="white">
                    <Text textStyle="body-small">Deutsch</Text>
                  </Link>
                  <Link href="#" color="white">
                    <Text textStyle="body-small">Francaise</Text>
                  </Link>
                  <Link href="#" color="white">
                    <Text textStyle="body-small">Italiano</Text>
                  </Link>
                </Stack>
              </Center>
              <Center>
                <Stack marginY="24px" spacing="24px" direction="row">
                  <Link href="#">
                    <FacebookIcon />
                  </Link>
                  <Link href="#">
                    <InstagramIcon />
                  </Link>
                  <Link href="#">
                    <TwitterIcon />
                  </Link>
                  <Link href="#">
                    <YoutubeIcon />
                  </Link>
                </Stack>
              </Center>
            </Container>
          </Center>
          <Divider borderColor="gray.700" />
          <Center>
            <Container width="full" maxWidth="container.xl" paddingX="lg">
              <Flex
                marginBottom="12px"
                marginTop="24px"
                gap={{ base: 'md', md: '2xl' }}
                flexWrap="wrap"
                justifyContent="center"
              >
                <Link
                  href="#"
                  color="white"
                  fontWeight="bold"
                  marginRight={{ base: '2xl', md: 0 }}
                >
                  <Text textStyle="heading5">SMG Swiss Marketplace Group</Text>
                </Link>

                <Link
                  href="#"
                  color="white"
                  fontWeight="bold"
                  marginRight={{ base: '2xl', md: 0 }}
                >
                  <Text textStyle="heading5">FinanceScout24</Text>
                </Link>

                <Link
                  href="#"
                  color="white"
                  fontWeight="bold"
                  marginRight={{ base: '2xl', md: 0 }}
                >
                  <Text textStyle="heading5"> ImmoScout24</Text>
                </Link>

                <Link
                  href="#"
                  color="white"
                  fontWeight="bold"
                  marginRight={{ base: '2xl', md: 0 }}
                >
                  <Text textStyle="heading5">MotoScout24</Text>
                </Link>

                <Link
                  href="#"
                  color="white"
                  fontWeight="bold"
                  marginRight={{ base: '2xl', md: 0 }}
                >
                  <Text textStyle="heading5">anaibis.ch</Text>
                </Link>
              </Flex>
              <Center>
                <Text textStyle="body-small">
                  © Copyright 2022 by SMG Swiss Marketplace Group AG. Alle
                  Rechte vorbehalten. Ihr Partner für Auto Occasionen - Suchen &
                  kaufen Sie Autos im grössten Automarkt der Schweiz
                </Text>
              </Center>
            </Container>
          </Center>
        </Box>
      </footer>
    </TranslationProvider>
  );
};

export default Footer;
