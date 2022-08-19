import React, { FC } from 'react';

import {
  Center,
  chakra,
  Container,
  Flex,
  useMultiStyleConfig,
} from '@chakra-ui/react';

import { CloseIcon } from '../icons';

interface Props {
  title: string;
  url: string;
}

const SimpleHeader: FC<Props> = ({ title, url }) => {
  const styles = useMultiStyleConfig(`SimpleHeader`);

  const Component = chakra('header', { baseStyle: styles.header });

  return (
    <Component>
      <Center>
        <Container
          width="full"
          maxWidth="container.xl"
          minHeight={{ xs: 'xl', lg: '2xl' }}
          paddingX={{ xs: 'md', lg: '4xl' }}
          centerContent
          flexDirection="row"
          justifyContent="space-between"
        >
          <Flex justify="space-between" minWidth="full">
            <chakra.h1 __css={styles.title}>{title}</chakra.h1>
            <Flex
              alignSelf="baseline"
              paddingLeft="md"
              paddingTop={{ lg: 'sm' }}
            >
              <a href={url}>
                <CloseIcon />
              </a>
            </Flex>
          </Flex>
        </Container>
      </Center>
    </Component>
  );
};

export default SimpleHeader;
export { Props as SimpleHeaderProps };
