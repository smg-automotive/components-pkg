import { withTranslationProvider } from '@/src/components/translationProvider/withTranslationProvider';

import ErrorPageContent, { ErrorPageContentProps } from './content';

const ErrorPage = withTranslationProvider<ErrorPageContentProps>(['errorPage'])(
  ErrorPageContent,
);

export default ErrorPage;
