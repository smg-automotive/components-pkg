import React, { FC } from 'react';

import { I18nContext, Language } from '@smg-automotive/i18n-pkg';
import { chakra } from '@chakra-ui/react';

import { ErrorStatusCode } from 'src/types/errorStatusCode';

import errorIllustrationSomethingWentWrong from 'src/assets/images/errorIllustrationSomethingWentWrong.png';

import errorIllustrationNotFound from 'src/assets/images/errorIllustrationNotFound.png';

import TranslationProvider from '../translationProvider';
import Text from '../text';
import Stack from '../stack';
import SimpleGrid from '../simpleGrid';
import PageLayout from '../layout/Page';
import { AutoScout24AppLogo, MotoScout24AppLogo } from '../icons';
import { H1 } from '../heading';
import Flex from '../flex';
import Divider from '../divider';
import AspectRatio from '../aspectRatio';
import ContactSupport from './actions/secondary/ContactSupport';
import BackToHomepage from './actions/secondary/BackToHomepage';
import Reload from './actions/primary/Reload';
import BackToLogin from './actions/primary/BackToLogin';
import { ActionButtonInterface } from './actions/interface';

const Nonce: FC<ActionButtonInterface> = () => {
  return null;
};

const config: Record<
  ErrorStatusCode,
  {
    illustration: string;
    buttonColumns: number;
    primaryAction: FC<ActionButtonInterface>;
    secondaryAction: FC<ActionButtonInterface>;
  }
> = {
  404: {
    illustration: errorIllustrationNotFound,
    buttonColumns: 1,
    primaryAction: Nonce,
    secondaryAction: BackToHomepage,
  },
  500: {
    illustration: errorIllustrationSomethingWentWrong,
    buttonColumns: 1,
    primaryAction: Nonce,
    secondaryAction: BackToHomepage,
  },
  clientSide: {
    illustration: errorIllustrationSomethingWentWrong,
    buttonColumns: 2,
    primaryAction: Reload,
    secondaryAction: BackToHomepage,
  },
  UNVERIFIED_EMAIL: {
    illustration: errorIllustrationNotFound,
    buttonColumns: 1,
    primaryAction: Nonce,
    secondaryAction: Nonce,
  },
  USER_BLOCKED: {
    illustration: errorIllustrationNotFound,
    buttonColumns: 1,
    primaryAction: Nonce,
    secondaryAction: ContactSupport,
  },
  UNKNOWN_AUTH_ERROR: {
    illustration: errorIllustrationNotFound,
    buttonColumns: 2,
    primaryAction: BackToLogin,
    secondaryAction: ContactSupport,
  },
};

export interface Props {
  statusCode: ErrorStatusCode;
  language: Language;
  onButtonClick?: () => void;
}

const ErrorPage: FC<Props> = ({ statusCode, language, onButtonClick }) => {
  const PrimaryAction = config[statusCode].primaryAction;
  const SecondaryAction = config[statusCode].secondaryAction;

  return (
    <TranslationProvider language={language} scopes={['errorPage']}>
      <I18nContext.Consumer>
        {({ t }) => {
          const actionButtonProps: ActionButtonInterface = {
            t,
            language,
          };

          return (
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
                        src={config[statusCode].illustration}
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
                    <SimpleGrid
                      columns={{
                        base: 1,
                        sm: config[statusCode].buttonColumns,
                      }}
                      alignItems="center"
                      spacing="md"
                    >
                      <PrimaryAction {...actionButtonProps} />
                      <SecondaryAction
                        {...actionButtonProps}
                        onButtonClick={onButtonClick}
                      />
                    </SimpleGrid>
                  </Stack>
                </Stack>
              </Flex>
            </PageLayout>
          );
        }}
      </I18nContext.Consumer>
    </TranslationProvider>
  );
};

export default ErrorPage;
