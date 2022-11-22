import React, { FC } from 'react';

import { Link, StackDivider } from '@chakra-ui/react';

import Text from '../text';
import Stack from '../stack';
import Center from '../center';

const FooterLanguageNavigation: FC = () => {
  return (
    <Center>
      <Stack
        marginTop="md"
        spacing="2xl"
        direction="row"
        divider={<StackDivider borderColor="gray.700" />}
      >
        <Link href="/de" color="white">
          <Text textStyle="body-small">Deutsch</Text>
        </Link>
        <Link href="/fr" color="white">
          <Text textStyle="body-small">Français</Text>
        </Link>
        <Link href="/it" color="white">
          <Text textStyle="body-small">Italiano</Text>
        </Link>
      </Stack>
    </Center>
  );
};

export default FooterLanguageNavigation;
