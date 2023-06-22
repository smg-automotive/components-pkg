import React, { FC } from 'react';

import Grid from 'src/components/grid';

import FooterSections from './Sections';
import { FooterConfigInstance } from './config/factory';
import FooterApps from './Apps';

interface FooterSectionGridProps {
  config: FooterConfigInstance;
}

const FooterSectionGrid: FC<FooterSectionGridProps> = ({ config }) => {
  return (
    <Grid
      templateColumns={{
        base: '1fr',
        md: 'repeat(4, 1fr)',
      }}
    >
      <FooterSections config={config} />
      <FooterApps config={config} />
    </Grid>
  );
};

export default FooterSectionGrid;
