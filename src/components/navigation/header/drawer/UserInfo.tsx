import React, { FC } from 'react';
import { MergedUser } from '@smg-automotive/auth';
import { Box, Divider, GridItem, Stack } from '@chakra-ui/react';

import Avatar from 'src/components/avatar';

type Props = {
  user: MergedUser | null;
};

const DrawerUserInfo: FC<Props> = ({ user }) => {
  if (!user) return null;

  return (
    <GridItem colSpan={{ base: 1, md: 5 }}>
      <Stack px="lg" mb="lg" direction="row">
        <Avatar />
        <Stack
          direction={{
            base: 'column',
            md: 'row',
          }}
        >
          <Box as="span" fontWeight="bold">
            {user.email}
          </Box>
          <Box as="span">({user.userName})</Box>
        </Stack>
      </Stack>
      <Divider />
    </GridItem>
  );
};

export default DrawerUserInfo;
