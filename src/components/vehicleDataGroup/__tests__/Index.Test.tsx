import React from 'react';
import { render, screen } from '@testing-library/react';

import VehicleDataGroupField from '../VehicleDataGroupField';
import VehicleDataGroup from '../';

describe('<VehicleDataGroup />', () => {
  const title = 'Group Label title';
  const itemLabel = 'Item label';
  const itemValue = 'Item value';

  it('should display component title', () => {
    render(
      <VehicleDataGroup title={title}>
        <VehicleDataGroupField label={`${itemLabel} 1`} value={itemValue} />
        <VehicleDataGroupField label={`${itemLabel} 2`} value={itemValue} />
      </VehicleDataGroup>
    );

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('should render component without title if `title` prop is not added', () => {
    render(
      <VehicleDataGroup>
        <VehicleDataGroupField label={`${itemLabel} 1`} value={itemValue} />
        <VehicleDataGroupField label={`${itemLabel} 2`} value={itemValue} />
      </VehicleDataGroup>
    );

    expect(screen.queryByText(title)).not.toBeInTheDocument();
  });

  it('should display label and value for each item', () => {
    render(
      <VehicleDataGroup title={title}>
        <VehicleDataGroupField label={`${itemLabel} 1`} value={itemValue} />
        <VehicleDataGroupField label={`${itemLabel} 2`} value={itemValue} />
      </VehicleDataGroup>
    );

    expect(screen.getByText(`${itemLabel} 1`)).toBeInTheDocument();
    expect(screen.getByText(`${itemLabel} 2`)).toBeInTheDocument();
    expect(screen.getAllByText(itemValue)).toHaveLength(2);
  });
});
