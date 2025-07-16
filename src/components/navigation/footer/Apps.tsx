import React, { FC } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';
import { Image } from '@chakra-ui/react';

import { Text } from 'src/components/text';
import { Stack } from 'src/components/stack';
import { ListItem, ListRoot } from 'src/components/list';
import { GridItem } from 'src/components/grid';
import googleplay from 'src/assets/images/googleplay.png';
import appstore from 'src/assets/images/appstore.png';

import FooterLink from './Link';
import { FooterConfigInstance } from './config/factory';

interface Props {
  config: FooterConfigInstance;
}

const FooterApps: FC<Props> = ({ config }) => {
  const { t } = useI18n();

  return (
    <GridItem>
      <Stack
        paddingY={{ base: '2xl', md: 'md' }}
        paddingX={{ base: 'md', md: '0' }}
        gap="md"
      >
        <Text textStyle="heading5">{t('footer.apps.title')}</Text>
        <ListRoot gap="md">
          <ListItem display="flex" alignItems="center">
            <FooterLink linkInstance={config.apps.android[0]}>
              <Image
                src={googleplay}
                alt={'Googleplay Icon'}
                width="3xl"
                height="md"
                loading="lazy"
              />
            </FooterLink>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <FooterLink linkInstance={config.apps.apple[0]}>
              <Image
                src={appstore}
                alt={'Appsore Icon'}
                width="3xl"
                height="md"
                loading="lazy"
              />
            </FooterLink>
          </ListItem>
        </ListRoot>
      </Stack>
    </GridItem>
  );
};

export default FooterApps;
