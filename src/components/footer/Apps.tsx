import React, { FC } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';
import { Image } from '@chakra-ui/react';

import Text from '../text';
import Stack from '../stack';

import GridItem from '../grid/GridItem';

import googleplay from '../../assets/images/googleplay.png';
import appstore from '../../assets/images/appstore.png';
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
        <FooterLink linkInstance={config.apps.android[0]}>
          <Image
            src={googleplay}
            alt={'Googleplay Icon'}
            width="136px"
            height="40px"
          />
        </FooterLink>

        <FooterLink linkInstance={config.apps.apple[0]}>
          <Image
            src={appstore}
            alt={'Appsore Icon'}
            width="136px"
            height="40px"
          />
        </FooterLink>
      </Stack>
    </GridItem>
  );
};

export default FooterApps;
