import React, { FC } from 'react';

import { StackDivider } from '@chakra-ui/react';

import { replaceLanguageInUrl } from 'src/utilities/replaceLanguageInUrl';
import Text from 'src/components/text';
import Stack from 'src/components/stack';
import Link from 'src/components/link';
import Center from 'src/components/center';

const FooterLanguageNavigation: FC = () => {
  return (
    <Center>
      <Stack
        marginTop="md"
        spacing="2xl"
        direction="row"
        divider={<StackDivider borderColor="gray.700" />}
      >
        <Link href={replaceLanguageInUrl('de')} color="white">
          <Text textStyle="body-small">Deutsch</Text>
        </Link>
        <Link href={replaceLanguageInUrl('fr')} color="white">
          <Text textStyle="body-small">Français</Text>
        </Link>
        <Link href={replaceLanguageInUrl('it')} color="white">
          <Text textStyle="body-small">Italiano</Text>
        </Link>
      </Stack>
    </Center>
  );
};

export default FooterLanguageNavigation;
