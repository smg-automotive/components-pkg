import React from 'react';

import { render, screen } from 'jest-utils';

import VehicleReference from '..';

const renderWrapper = ({
  vehicleTitle = 'title',
  price = '90000',
  sellerName = 'Puni',
  sellerAddress = 'Mosimo 92',
}) =>
  render(
    <VehicleReference
      vehicleTitle={vehicleTitle}
      price={price}
      sellerName={sellerName}
      sellerAddress={sellerAddress}
    />,
  );

describe('<VehicleReference>', () => {
  it('renders vehicle title', () => {
    const vehicleTitle = 'Are you lookign for me?';
    renderWrapper({ vehicleTitle });

    expect(screen.getByText(vehicleTitle)).toBeInTheDocument();
  });

  it('renders price', () => {
    const price = '10';
    renderWrapper({ price });

    expect(screen.getByText(price)).toBeInTheDocument();
  });

  it('renders seller name', () => {
    const sellerName = 'Puni Bananoni';
    renderWrapper({ sellerName });

    expect(screen.getByText(sellerName)).toBeInTheDocument();
  });

  it('renders seller address', () => {
    const sellerAddress = 'Mosimo Puni 89';
    renderWrapper({ sellerAddress });

    expect(screen.getByText(sellerAddress)).toBeInTheDocument();
  });

  it('renders missing image when we do not pass any image', () => {
    renderWrapper({});

    expect(screen.getByTestId('missing-image')).toBeInTheDocument();
  });
});
