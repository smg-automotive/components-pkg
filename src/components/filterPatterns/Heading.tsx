import { withTranslationProvider } from '../translationProvider/withTranslationProvider';
import {
  FilterHeadingContent,
  FilterHeadingContentProps,
} from './HeadingContent';

export const FilterHeading = withTranslationProvider<FilterHeadingContentProps>(
  ['filterSelectButton'],
)(FilterHeadingContent);
