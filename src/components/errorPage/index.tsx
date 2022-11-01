import React, { FC } from 'react';

import { chakra } from '@chakra-ui/react';

import { translations } from './translations';
import Text from '../text';
import Stack from '../stack';
import { AutoScout24AppLogo, MotoScout24AppLogo } from '../icons';
import { H1 } from '../heading';
import Grid from '../grid';
import Flex from '../flex';
import Divider from '../divider';
import Button from '../button';
import AspectRatio from '../aspectRatio';
import { Language } from '../../types/language';
import { ErrorStatusCode } from '../../types/errorStatusCode';
import errorIllustrationSomethingWentWrong from '../../assets/images/errorIllustrationSomethingWentWrong.png';
import errorIllustrationNotFound from '../../assets/images/errorIllustrationNotFound.png';

const illustrations = {
  404: errorIllustrationNotFound,
  500: errorIllustrationSomethingWentWrong,
};

interface Props {
  statusCode: ErrorStatusCode;
  language: Language;
  onButtonClick?: () => void;
}

const ErrorPage: FC<Props> = ({ statusCode, language, onButtonClick }) => {
  const errorTranslations = translations[language][statusCode];
  return (
    <Flex justifyContent="center" pt="4xl">
      <Stack align="center" spacing="4xl">
        <Grid columns={2} spacingX="4xl">
          <AutoScout24AppLogo width="80px" height="51px" />
          <MotoScout24AppLogo width="80px" height="51px" />
        </Grid>
        <Divider />
        <Stack align="center" spacing="2xl">
          <AspectRatio ratio={4 / 3} maxWidth="400px" width="full">
            <chakra.img
              src={illustrations[statusCode]}
              alt={`a ${statusCode} error occurred.`}
            />
          </AspectRatio>
          <Stack align="center" spacing="md">
            <H1 textAlign="center">{errorTranslations.title}</H1>
            <Text textAlign="center">{errorTranslations.description}</Text>
          </Stack>
          <Button
            href={`/${language}`}
            as="a"
            onClick={onButtonClick}
            variant="secondary"
          >
            {errorTranslations.buttonLabel}
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default ErrorPage;
