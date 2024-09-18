import React, { FC } from 'react';

import Button from 'src/components/button';

import { ActionButtonInterface } from '../interface';

const BackToHomepage: FC<ActionButtonInterface> = ({
  t,
  language = 'de',
  onButtonClick,
}) => {
  const languageToUse = language === 'en' ? 'de' : language;
  const homePageLink = `/${languageToUse}`;

  return (
    <Button
      onClick={() => {
        onButtonClick?.();
      }}
      as="a"
      href={homePageLink}
      variant="secondary"
    >
      {t(`errorPage.backToHomepage`)}
    </Button>
  );
};

export default BackToHomepage;
