import React, { FC } from 'react';

import { useI18n } from 'src/utilities/i18nInit';
import { Box } from 'src/components/box';

export const FooterCopyright: FC = () => {
  const { t } = useI18n();

  return (
    <Box textStyle="body-small" textAlign="center" opacity="80">
      {t('footer.copyright', { year: new Date().getFullYear() })}
    </Box>
  );
};
