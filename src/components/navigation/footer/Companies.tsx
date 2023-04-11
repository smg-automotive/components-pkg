import React, { FC } from 'react';

import Stack from 'src/components/stack';
import Box from 'src/components/box';

import FooterLink from './Link';
import { FooterConfigInstance } from './config/factory';

interface FooterCompaniesProps {
  config: FooterConfigInstance;
}

const FooterCompanies: FC<FooterCompaniesProps> = ({ config }) => {
  return (
    <Box
      gap={{ base: 'md', md: '2xl' }}
      marginBottom="md"
      marginTop="2xl"
      as={Stack}
      direction="row"
      justify="center"
      wrap="wrap"
    >
      {config.companies.map((companyLink, index) => {
        return (
          <FooterLink
            key={`company-${index}`}
            linkInstance={companyLink}
            bold={true}
          />
        );
      })}
    </Box>
  );
};

export default FooterCompanies;
