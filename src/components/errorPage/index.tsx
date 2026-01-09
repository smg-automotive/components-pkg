import { withTranslationProvider } from '../translationProvider/withTranslationProvider';
import { ErrorPageContent, ErrorPageContentProps } from './content';

export const ErrorPage = withTranslationProvider<ErrorPageContentProps>([
  'errorPage',
])(ErrorPageContent);
