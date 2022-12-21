import React, { FC } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';

import Text from '../text';
import Center from '../center';

const FooterCopyright: FC = () => {
  const { t } = useI18n();

  return (
    <Center>
      <Text textStyle="body-small">
        {t('footer.copyright', { year: new Date().getFullYear() })}
      </Text>
    </Center>
  );
};

export default FooterCopyright;
