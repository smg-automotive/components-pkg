import { ReactNode } from 'react';
import { Language } from '@smg-automotive/i18n-pkg';

export type FilterSelectButtonProps = {
  /**
   * The primary action button if a filter is applied.
   * If a filter is not applied, a secondary close button is shown.
   */
  actionButton: {
    label: string;
    onClick: () => void;
  };
  /**
   * Shows the value of the filter in default and open state.
   */
  displayValue: string;
  initialPopoverState?: 'open' | 'closed';
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
  onPopoverClose?: () => void;
  onPopoverOpen?: () => void;
  /**
   * Callback that is called if the reset filter button is pressed.
   */
  onResetFilter: () => void;
  /**
   * Content of the popover.
   */
  children: ReactNode;
};
