import { ReactNode } from 'react';
import { Language } from '@smg-automotive/i18n-pkg';

export type FilterPatternProps = {
  /**
   * Shows the value of the filter in default and open state.
   */
  displayValue: string;
  /**
   * To know if a filter is applied or not.
   * Controls styling and to know which button is shown.
   */
  isApplied: boolean;
  /**
   * Label for the filter button and the popover.
   */
  label: string;
  language: Language;
  /**
   * In case multiple filters are shown in the same popover.
   * This can be used to show a branded bubble next to the filter title that shows how many filters are applied.
   */
  numberOfAppliedFilters?: number;
  /**
   * Callback that is called if the reset filter button is pressed.
   */
  onResetFilter: () => void;
  /**
   * Content of the popover.
   */
  children: ReactNode;
};
