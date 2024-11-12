import React from 'react';
import { Trans } from '@smg-automotive/i18n-pkg';

import Box from 'src/components/box';

const EmailChangeVerificationErrorContent = () => {
  return (
    <Box width="full">
      <p>
        <Trans i18nKey="errorPage.EMAIL_CHANGE_VERIFICATION_ERROR.content.email">
          <strong></strong>
        </Trans>
      </p>
      <p>
        <Trans i18nKey="errorPage.EMAIL_CHANGE_VERIFICATION_ERROR.content.workingHours">
          <strong></strong>
        </Trans>
      </p>
      <p>
        <Trans i18nKey="errorPage.EMAIL_CHANGE_VERIFICATION_ERROR.content.phone">
          <strong></strong>
        </Trans>
      </p>
    </Box>
  );
};

export default EmailChangeVerificationErrorContent;
