import React, { FC } from 'react';

import Flex from '../flex';
import Box from '../box';
import FooterLink from './Link';
import { FooterConfigInstance } from './config/factory';

interface FooterCompaniesProps {
  config: FooterConfigInstance;
}

const FooterCompanies: FC<FooterCompaniesProps> = ({ config }) => {
  return (
    <Flex
      marginBottom="md"
      marginTop="2xl"
      flexWrap="wrap"
      justifyContent="center"
    >
      {config.companies.map((companyLink, index) => {
        return (
          <Box key={`company-${index}`} marginRight={{ base: 'md', md: '2xl' }}>
            <FooterLink linkInstance={companyLink} bold={true} />
          </Box>
        );
      })}
    </Flex>
  );
};

export default FooterCompanies;
