import React, { FC } from 'react';

import { useI18n } from 'src/utilities/i18nInit';
import { Brand } from 'src/types/brand';

import { Box } from 'src/components/box';

type Props = {
  brand: Brand;
};

export const FooterCopyright: FC<Props> = ({ brand }) => {
  const { t } = useI18n();

  return (
    <Box textStyle="body-small" textAlign="center" opacity="80">
      {t(`footer.copyright.${brand}`, { year: new Date().getFullYear() })}
    </Box>
  );
};
