import React from 'react';

import { Trans } from 'src/utilities/i18nInit';
import { Box } from 'src/components/box';

export const EmailChangeVerificationErrorContent = () => {
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
