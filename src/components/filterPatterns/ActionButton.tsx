import React, { FC } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';

import Button from '../button';
import { FilterPatternProps } from './props';

export type ActionButtonProps = {
  /**
   * The primary action button if a filter is applied.
   * If a filter is not applied, a secondary close button is shown.
   */
  actionButton: {
    label: string;
    onClick?: () => void;
    href?: () => void;
  };
  onClose: () => void;
} & Pick<FilterPatternProps, 'isApplied'>;

const FilterActionButton: FC<ActionButtonProps> = ({
  isApplied,
  actionButton,
  onClose,
}) => {
  const { t } = useI18n();

  return (
    <Button
      onClick={
        isApplied
          ? () => {
              actionButton.onClick?.();
              onClose();
            }
          : onClose
      }
      variant={isApplied ? 'primary' : 'secondary'}
      width="full"
    >
      {isApplied ? actionButton.label : t('filterSelectButton.close')}
    </Button>
  );
};

export default FilterActionButton;
