import React, { FC } from 'react';

import {
  Center,
  chakra,
  Container,
  Flex,
  useMultiStyleConfig,
} from '@chakra-ui/react';

import { CloseIcon } from '../icons';

export interface Props {
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
          maxWidth="container.lg"
          minHeight={{ '2xs': 'xl', md: '2xl' }}
          paddingX={{ '2xs': 'lg', lg: 0 }}
          centerContent
          flexDirection="row"
          justifyContent="space-between"
        >
          <Flex justify="space-between" minWidth="full">
            <chakra.h1 __css={styles.title}>{title}</chakra.h1>
            <Flex
              alignSelf="baseline"
              paddingLeft="md"
              paddingTop={{ md: 'sm' }}
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
