import { ReactNode } from 'react';
import { Language } from '@smg-automotive/i18n-pkg';

export type FilterSelectButtonProps = {
  /**
   * Configure the primary action button if a filter is applied.
   * If a filter is not applied, a secondary close button is shown
   */
  actionButton: {
    label: string;
    onClick: () => void;
  };
  /**
   * Shows the value of the filter in default and open state
   */
  displayValue: string;
  initialPopoverState?: 'open' | 'closed';
  /**
   * To know if a filter is applied or not.
   * Controls styling and to know which button is shown.
   */
  isApplied: boolean; //to know if a filter is applied or not (keeping the component independent) - for styling and primary/secondary button switch
  label: string; // used for placeholder in default state and for the value if a filter is applied
  language: Language;
  /**
   * In case multiple filters are shown in the same popover.
   * This can be used to show a branded bubble next to the filter title that shows how many filters are applied
   */
  numberOfAppliedFilters?: number;
  onPopoverClose?: () => void; // when dialog is closed - for tracking?
  onPopoverOpen?: () => void; // when dialog gets open - for tracking?
  /**
   * Callback that is called if the reset filter button is pressed
   */
  onResetFilter: () => void;
  /**
   * Content of the popover
   */
  children: ReactNode;
};
