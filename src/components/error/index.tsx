import React, { FC, PropsWithChildren, ReactNode } from 'react';

import { chakra } from '@chakra-ui/react';

import { translations } from './translations';
import { StatusCodes } from './statusCodes';
import Text from '../text';
import Stack from '../stack';
import { AspectRatio } from '../index';
import { H1 } from '../heading';
import Flex from '../flex';
import Button from '../button';
import { Language } from '../../types/language';
import errorIllustration from '../../assets/images/errorIllustration.png';

interface Props {
  statusCode: StatusCodes;
  language: Language;
  onButtonClick: () => void;
  brandLogo: ReactNode;
}

const ErrorPage: FC<PropsWithChildren<Props>> = ({
  statusCode,
  language,
  onButtonClick,
  brandLogo,
  children,
}) => {
  const errorTranslations = translations[language][statusCode];
  return (
    <Flex height="full" alignItems="center" justifyContent="center">
      <Stack align="center" spacing="2xl">
        {brandLogo}
        <AspectRatio ratio={4 / 3} maxWidth="400px" width="full">
          <chakra.img
            src={errorIllustration}
            alt={`a ${statusCode} error occurred.`}
          />
        </AspectRatio>
        <Stack align="center" spacing="md">
          <H1 textAlign="center">{errorTranslations.title}</H1>
          <Text textAlign="center">{errorTranslations.description}</Text>
          {children}
        </Stack>
        <Button href={`/${language}`} as="a" onClick={onButtonClick}>
          {errorTranslations.buttonLabel}
        </Button>
      </Stack>
    </Flex>
  );
};

export default ErrorPage;
