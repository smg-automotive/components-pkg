import React, { FC } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';

import { opacity } from 'src/themes/shared/opacity';

import Box from 'src/components/box';

const FooterCopyright: FC = () => {
  const { t } = useI18n();

  return (
    <Box textStyle="body-small" textAlign="center" opacity={opacity[80]}>
      {t('footer.copyright', { year: new Date().getFullYear() })}
    </Box>
  );
};

export default FooterCopyright;
