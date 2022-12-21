import React, { FC } from 'react';

import { I18nContext, Language } from '@smg-automotive/i18n-pkg';
import { chakra } from '@chakra-ui/react';

import TranslationProvider from '../translationProvider';
import Text from '../text';
import Stack from '../stack';
import SimpleGrid from '../simpleGrid';
import PageLayout from '../layout/Page';
import { AutoScout24AppLogo, MotoScout24AppLogo } from '../icons';
import { H1 } from '../heading';
import Flex from '../flex';
import Divider from '../divider';
import Button from '../button';
import AspectRatio from '../aspectRatio';
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
  return (
    <TranslationProvider language={language} scopes={['errorPage']}>
      <I18nContext.Consumer>
        {({ t }) => (
          <PageLayout maxContentWidth="md" header={null}>
            <Flex justifyContent="center" pt={{ base: '3xl', md: 'xl' }}>
              <Stack align="center" spacing="4xl">
                <SimpleGrid columns={2} spacingX="4xl">
                  <AutoScout24AppLogo width="80px" height="51px" />
                  <MotoScout24AppLogo width="80px" height="51px" />
                </SimpleGrid>
                <Divider />
                <Stack align="center" spacing="2xl">
                  <AspectRatio ratio={4 / 3} maxWidth="400px" width="full">
                    <chakra.img
                      src={illustrations[statusCode]}
                      alt={`a ${statusCode} error occurred.`}
                    />
                  </AspectRatio>
                  <Stack align="center" spacing="md">
                    <H1 textAlign="center">
                      {t(`errorPage.${statusCode}.title`)}
                    </H1>
                    <Text textAlign="center">
                      {t(`errorPage.${statusCode}.description`)}
                    </Text>
                  </Stack>
                  <Button
                    href={`/${language}`}
                    as="a"
                    onClick={onButtonClick}
                    variant="secondary"
                  >
                    {t(`errorPage.${statusCode}.buttonLabel`)}
                  </Button>
                </Stack>
              </Stack>
            </Flex>
          </PageLayout>
        )}
      </I18nContext.Consumer>
    </TranslationProvider>
  );
};

export default ErrorPage;
