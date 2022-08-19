import React, { FC } from 'react';

import {
  Center,
  chakra,
  Container,
  Flex,
  Grid,
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
          paddingY="xl"
        >
          <Grid
            gridTemplateColumns="minmax(min-content, max-content) minmax(min-content, max-content) 1fr"
            gap="xl"
          >
            <Flex justify="space-between" alignContent="space-between">
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
          </Grid>
        </Container>
      </Center>
    </Component>
  );
};

export default SimpleHeader;
export { Props as SimpleHeaderProps };
