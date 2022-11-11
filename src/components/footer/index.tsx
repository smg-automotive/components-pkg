import React, { FC } from 'react';
import { Container, Flex, Image, StackDivider } from '@chakra-ui/react';

import Text from '../text';
import Stack from '../stack';
import MobileOnlyAccordionSection from '../mobileOnlyAccordion/MobileOnlyAccordionSection';
import MobileOnlyAccordion from '../mobileOnlyAccordion';
import ListItem from '../list/ListItem';
import List from '../list';
import Link from '../link';
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from '../icons';
import GridItem from '../grid/GridItem';
import Grid from '../grid';
import Divider from '../divider';
import Center from '../center';
import Box from '../box';
import googleplay from '../../assets/images/googleplay.png';
import appstore from '../../assets/images/appstore.png';

export const DummyItem = ({ children }) => {
  return <GridItem>{children}</GridItem>;
};

const Footer: FC = () => {
  return (
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
            <Grid
              templateColumns={{
                base: '1fr',
                md: 'repeat(4, 1fr)',
              }}
            >
              <DummyItem>
                <MobileOnlyAccordion allowMultiple={true} allowToggle={true}>
                  <MobileOnlyAccordionSection title="Autoscout24" color="white">
                    <List>
                      <ListItem>asdasd</ListItem>
                    </List>
                  </MobileOnlyAccordionSection>
                  <MobileOnlyAccordionSection
                    title="Für Medien"
                    color="white"
                    borderBottom="red"
                  >
                    <List>
                      <ListItem>asdasd</ListItem>
                    </List>
                  </MobileOnlyAccordionSection>
                </MobileOnlyAccordion>
              </DummyItem>
              <DummyItem>
                <MobileOnlyAccordion allowMultiple={true} allowToggle={true}>
                  <MobileOnlyAccordionSection title="Über uns " color="white">
                    <List>
                      <ListItem>asdasd</ListItem>
                      <ListItem>asdasd</ListItem>
                      <ListItem>asdasd</ListItem>
                      <ListItem>asdasd</ListItem>
                    </List>
                  </MobileOnlyAccordionSection>
                  <MobileOnlyAccordionSection title="Werbung" color="white">
                    <List>
                      <ListItem>asdasd</ListItem>
                    </List>
                  </MobileOnlyAccordionSection>
                </MobileOnlyAccordion>
              </DummyItem>
              <DummyItem>
                <MobileOnlyAccordion allowMultiple={true} allowToggle={true}>
                  <MobileOnlyAccordionSection title="Für Medien" color="white">
                    <List>
                      <ListItem>asdasd</ListItem>
                      <ListItem>asdasd</ListItem>
                      <ListItem>asdasd</ListItem>
                      <ListItem>asdasd</ListItem>
                    </List>
                  </MobileOnlyAccordionSection>
                  <MobileOnlyAccordionSection title="Rechtliches" color="white">
                    <List>
                      <ListItem>asdasd</ListItem>
                    </List>
                  </MobileOnlyAccordionSection>
                </MobileOnlyAccordion>
              </DummyItem>
              <DummyItem>
                <Stack
                  paddingY={{ base: '2xl', md: 'md' }}
                  paddingX={{ base: 'md', md: 0 }}
                  spacing="md"
                >
                  <Text textStyle="heading5">Apps</Text>
                  <Link href="#">
                    <Image
                      src={googleplay}
                      alt={'Googleplay Icon'}
                      width="136px"
                      height="40px"
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src={appstore}
                      alt={'Appsore Icon'}
                      width="136px"
                      height="40px"
                    />
                  </Link>
                </Stack>
              </DummyItem>
            </Grid>
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
            {/* <Grid
                marginBottom="12px"
                templateColumns={{
                  base: '1fr',
                  md: 'repeat(, 1fr)',
                }}
                marginTop="24px"
                gap={{ base: 'md', md: '2xl' }}
              > */}

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
                © Copyright 2022 by SMG Swiss Marketplace Group AG. Alle Rechte
                vorbehalten. Ihr Partner für Auto Occasionen - Suchen & kaufen
                Sie Autos im grössten Automarkt der Schweiz
              </Text>
            </Center>
          </Container>
        </Center>
      </Box>
    </footer>
  );
};

export default Footer;
