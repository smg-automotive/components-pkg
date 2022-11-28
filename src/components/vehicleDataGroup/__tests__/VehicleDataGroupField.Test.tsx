import React from 'react';
import { render, screen } from '@testing-library/react';

import VehicleDataGroupField from '../VehicleDataGroupField';
import { CloseIcon } from '../../icons';
import VehicleDataGroup from '../';

describe('<VehicleDataGroupField />', () => {
  const itemLabel = 'Item label';
  const itemValue = 'Item value';

  const ItemValue = () => (
    <>
      <CloseIcon data-testid="closeIcon" />
      {itemValue}
    </>
  );

  const ItemLabel = () => (
    <>
      <CloseIcon data-testid="closeIcon" />
      {itemLabel}
    </>
  );

  it('should display value with icon and text', () => {
    render(
      <VehicleDataGroup>
        <VehicleDataGroupField label={itemLabel} value={<ItemValue />} />
      </VehicleDataGroup>
    );

    expect(screen.getByText(itemValue)).toBeInTheDocument();
    expect(screen.getByTestId('closeIcon')).toBeInTheDocument();
  });

  it('should display label with icon and text', () => {
    render(
      <VehicleDataGroup>
        <VehicleDataGroupField label={<ItemLabel />} value={itemValue} />
      </VehicleDataGroup>
    );

    expect(screen.getByText(itemLabel)).toBeInTheDocument();
    expect(screen.getByTestId('closeIcon')).toBeInTheDocument();
  });
});
