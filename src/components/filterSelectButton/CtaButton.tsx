import Button from '../button';
import React, { FC } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';

export type FilterSelectCtaButtonProps = {
  applyButton: {
    // if primary search button is shown
    label: string;
    onClick: () => void;
  };
  isApplied: boolean; //to know if a filter is applied or not (keeping the component independent) - for styling and primary/secondary button switch
  onClose: () => void;
};
const FilterSelectCtaButton: FC<FilterSelectCtaButtonProps> = ({
  isApplied,
  applyButton,
  onClose,
}) => {
  const { t } = useI18n();

  return (
    <Button
      variant={isApplied ? 'primary' : 'secondary'}
      onClick={
        isApplied
          ? () => {
              applyButton.onClick();
              onClose();
            }
          : onClose
      }
      width="full"
    >
      {isApplied ? applyButton.label : t('filterSelectButton.close')}
    </Button>
  );
};

export default FilterSelectCtaButton;
