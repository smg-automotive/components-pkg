import React, { FC } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';

// TODO: use `opacity` from theme tokens
// import { opacity } from 'src/themes/shared/tokens/opacity';
import { Box } from 'src/components/box';

const FooterCopyright: FC = () => {
  const { t } = useI18n();

  return (
    <Box textStyle="body-small" textAlign="center" opacity="80">
      {t('footer.copyright', { year: new Date().getFullYear() })}
    </Box>
  );
};

export default FooterCopyright;
