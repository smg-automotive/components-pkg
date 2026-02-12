import React, { FC } from 'react';
import { Language } from '@smg-automotive/i18n-pkg';

import { chakra } from '@chakra-ui/react';

import { useI18n } from 'src/utilities/i18nInit';
import { ErrorStatusCode } from 'src/types/errorStatusCode';
import { Text } from 'src/components/text';
import { Stack } from 'src/components/stack';
import { SimpleGrid } from 'src/components/simpleGrid';
import { Separator } from 'src/components/separator';
import { PageLayout } from 'src/components/layout/Page';
import { AutoScout24AppLogo, MotoScout24AppLogo } from 'src/components/icons';
import { H1 } from 'src/components/heading';
import { Flex } from 'src/components/flex';

import { AspectRatio } from 'src/components/aspectRatio';
import errorIllustrationVerifyEmail from 'src/assets/images/errorIllustrationVerifyEmail.png';
import errorIllustrationSomethingWentWrong from 'src/assets/images/errorIllustrationSomethingWentWrong.png';

import errorIllustrationNotFound from 'src/assets/images/errorIllustrationNotFound.png';

import { ContactSupport } from '../actions/secondary/ContactSupport';

import { BackToHomepageSecondary } from '../actions/secondary/BackToHomepage';
import { Reload } from '../actions/primary/Reload';
import { BackToLogin } from '../actions/primary/BackToLogin';
import { BackToHomepagePrimary } from '../actions/primary/BackToHomepage';
import { ActionButtonInterface } from '../actions/interface';
import { EmailChangeVerificationErrorContent } from './EmailChangeVerification';

const Nonce: FC<ActionButtonInterface> = () => {
  return null;
};

const config: Record<
  ErrorStatusCode,
  {
    illustration: string;
    buttonColumns: number;
    content: FC<ActionButtonInterface>;
    primaryAction: FC<ActionButtonInterface>;
    secondaryAction: FC<ActionButtonInterface>;
  }
> = {
  404: {
    illustration: errorIllustrationNotFound,
    buttonColumns: 1,
    content: Nonce,
    primaryAction: Nonce,
    secondaryAction: BackToHomepageSecondary,
  },
  500: {
    illustration: errorIllustrationSomethingWentWrong,
    buttonColumns: 1,
    content: Nonce,
    primaryAction: Nonce,
    secondaryAction: BackToHomepageSecondary,
  },
  clientSide: {
    illustration: errorIllustrationSomethingWentWrong,
    buttonColumns: 2,
    content: Nonce,
    primaryAction: Reload,
    secondaryAction: BackToHomepageSecondary,
  },
  UNVERIFIED_EMAIL: {
    illustration: errorIllustrationNotFound,
    buttonColumns: 2,
    content: Nonce,
    primaryAction: BackToLogin,
    secondaryAction: ContactSupport,
  },
  INITIAL_UNVERIFIED_EMAIL: {
    illustration: errorIllustrationVerifyEmail,
    buttonColumns: 1,
    content: Nonce,
    primaryAction: BackToLogin,
    secondaryAction: Nonce,
  },
  USER_BLOCKED: {
    illustration: errorIllustrationNotFound,
    buttonColumns: 1,
    content: Nonce,
    primaryAction: Nonce,
    secondaryAction: ContactSupport,
  },
  UNKNOWN_AUTH_ERROR: {
    illustration: errorIllustrationNotFound,
    buttonColumns: 2,
    content: Nonce,
    primaryAction: BackToLogin,
    secondaryAction: ContactSupport,
  },
  EMAIL_CHANGE_VERIFICATION_ERROR: {
    illustration: errorIllustrationNotFound,
    buttonColumns: 1,
    content: EmailChangeVerificationErrorContent,
    primaryAction: BackToHomepagePrimary,
    secondaryAction: Nonce,
  },
};

export interface ErrorPageContentProps {
  statusCode: ErrorStatusCode;
  language: Language;
  onButtonClick?: () => void;
}

export const ErrorPageContent: FC<ErrorPageContentProps> = ({
  statusCode,
  language,
  onButtonClick,
}) => {
  const PrimaryAction = config[statusCode].primaryAction;
  const SecondaryAction = config[statusCode].secondaryAction;
  const Content = config[statusCode].content;
  const { t } = useI18n();

  const actionButtonProps: ActionButtonInterface = {
    t,
    language,
  };

  return (
    <PageLayout maxContentWidth="md" header={null}>
      <Flex justifyContent="center" pt={{ base: '3xl', md: 'xl' }}>
        <Stack align="center" gap="4xl">
          <SimpleGrid columns={2} gap="4xl">
            <AutoScout24AppLogo width="2xl" height="xl" />
            <MotoScout24AppLogo width="2xl" height="xl" />
          </SimpleGrid>
          <Separator orientation="horizontal" />
          <Stack align="center" gap="2xl">
            <AspectRatio
              ratio={4 / 3}
              css={{ maxWidth: '400px', width: 'full' }}
            >
              <chakra.img
                src={config[statusCode].illustration}
                alt={`a ${statusCode} error occurred.`}
              />
            </AspectRatio>
            <Stack align="center" gap="md">
              <H1 textAlign="center">{t(`errorPage.${statusCode}.title`)}</H1>
              <Text textAlign="center">
                {t(`errorPage.${statusCode}.description`)}
              </Text>
              <Content {...actionButtonProps} />
            </Stack>
            <SimpleGrid
              columns={{
                base: 1,
                sm: config[statusCode].buttonColumns,
              }}
              alignItems="center"
              gap="md"
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
};
