import React, { FC } from 'react';

import FooterLink from './Link';
import { FooterConfigInstance } from './config/factory';
import Flex from '../flex';

interface FooterCompaniesProps {
  config: FooterConfigInstance;
}

const FooterCompanies: FC<FooterCompaniesProps> = ({ config }) => {
  return (
    <Flex
      marginBottom="md"
      marginTop="2xl"
      gap={{ base: 'md', md: '2xl' }}
      flexWrap="wrap"
      justifyContent="center"
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
    </Flex>
  );
};

export default FooterCompanies;
