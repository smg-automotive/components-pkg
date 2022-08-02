import React, { FC } from 'react';

import { chakra, Flex, useMultiStyleConfig } from '@chakra-ui/react';

//import { VehicleReference } from '../../index';

interface Props {
  title: string;
}

const FormWithVehicleReference: FC<Props> = ({ title }) => {
  const styles = useMultiStyleConfig(`SimpleHeader`);

  const Component = chakra('main');

  return (
    <Component>
      <Flex
        minH={{ xs: 'xl', lg: '2xl' }}
        paddingY="xl"
        align="center"
        justify="space-between"
      >
        <Flex>
          <chakra.h1 __css={styles.title}>{title}</chakra.h1>
        </Flex>
        <chakra.aside>{/*<VehicleReference />*/}</chakra.aside>
      </Flex>
    </Component>
  );
};

export default FormWithVehicleReference;
