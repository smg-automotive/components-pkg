import { FC, ReactNode } from 'react';
import { Language } from '@smg-automotive/i18n-pkg';
import { IconProps } from '@chakra-ui/react';

export type FilterPatternProps = {
  /**
   * Shows the value of the filter in default and open state.
   */
  displayValue: string;
  /**
   * Showing an icon (e.g. EV indicator) on the filter button and heading
   */
  Icon?: FC<IconProps>;
  /**
   * To know if a filter is applied or not.
   * Controls styling and to know which button is shown.
   */
  isApplied: boolean;
  /**
   * Label for the filter button and the modal/popover title.
   */
  label: string;
  language: Language;
  /**
   * In case multiple filters are shown in the same filter (e.g. a list of checkboxes).
   * This can be used to show a branded bubble next to the filter title that shows how many filters are applied.
   */
  numberOfAppliedFilters?: number;
  /**
   * Callback that is called if the reset filter button is pressed.
   */
  onResetFilter: (placement: 'filterButton' | 'filter') => void;
  /**
   * If a call-to-action button is displayed in the filter footer
   * @default true
   */
  showCallToActionButton?: boolean;
  /**
   * To show a custom filter header.
   */
  header?: ReactNode;
  /**
   * Content of the filter.
   */
  children: ReactNode;
};
