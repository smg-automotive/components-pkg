import React, { FC } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';
import { Image, List, ListItem } from '@chakra-ui/react';

import Text from 'src/components/text';
import Stack from 'src/components/stack';

import GridItem from 'src/components/grid/GridItem';
// import googleplay from 'src/assets/images/googleplay.png';
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
        paddingX={{ base: 'md', md: 0 }}
        spacing="md"
      >
        <Text textStyle="heading5">{t('footer.apps.title')}</Text>
        <List spacing="md">
          <ListItem display="flex" alignItems="center">
            <FooterLink linkInstance={config.apps.android[0]}>
              <Image
                src="data:image/png;base64,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"
                alt={'Googleplay Icon'}
                width="136px"
                height="40px"
                loading="lazy"
              />
            </FooterLink>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <FooterLink linkInstance={config.apps.apple[0]}>
              <Image
                src={appstore}
                alt={'Appsore Icon'}
                width="136px"
                height="40px"
                loading="lazy"
              />
            </FooterLink>
          </ListItem>
        </List>
      </Stack>
    </GridItem>
  );
};

export default FooterApps;
