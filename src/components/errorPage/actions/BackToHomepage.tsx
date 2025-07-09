import React, { FC } from 'react';

// TODO: will swap with button v3 when available
import Button from 'src-v2/components/button';

import { ActionButtonInterface } from './interface';

const BackToHomepage: FC<
  ActionButtonInterface & { variant: 'primary' | 'secondary' }
> = ({ t, language = 'de', onButtonClick, variant }) => {
  const languageToUse = language === 'en' ? 'de' : language;
  const homePageLink = `/${languageToUse}`;

  return (
    <Button
      onClick={() => {
        onButtonClick?.();
      }}
      as="a"
      href={homePageLink}
      variant={variant}
    >
      {t(`errorPage.backToHomepage`)}
    </Button>
  );
};

export default BackToHomepage;
