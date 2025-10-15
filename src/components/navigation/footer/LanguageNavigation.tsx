import React, { FC } from 'react';

import { Text } from 'src/components/text';
import { StackSeparator } from 'src/components/stack';

import { Stack } from 'src/components/stack';
import { Link } from 'src/components/link';
import { Center } from 'src/components/center';

export const FooterLanguageNavigation: FC = () => {
  return (
    <Center>
      <Stack
        marginTop="md"
        gap="2xl"
        direction="row"
        separator={<StackSeparator borderColor="gray.700" />}
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
