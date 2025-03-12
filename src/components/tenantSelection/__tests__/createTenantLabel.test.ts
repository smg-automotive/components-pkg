import { createTenantLabel } from '../createTenantLabel';

describe('createTenantLabel', () => {
  it("should return the managedSeller's billingName, city and id", () => {
    const managedSeller = {
      id: 123,
      billingName: 'Example Billing Name',
      billingAddress: null,
      billingCity: 'Bern',
      billingCountryCode: null,
      billingPostOfficeBox: null,
      billingZipCode: '3001',
    };
    const label = createTenantLabel(managedSeller);

    expect(label).toEqual('Example Billing Name Bern - 123');
  });

  it("omits the city if the managedSeller doesn't have a billingCity", () => {
    const managedSeller = {
      id: 123,
      billingName: 'Example Billing Name',
      billingAddress: null,
      billingCity: null,
      billingCountryCode: null,
      billingPostOfficeBox: null,
      billingZipCode: '3001',
    };
    const label = createTenantLabel(managedSeller);

    expect(label).toEqual('Example Billing Name - 123');
  });

  it("omits the billingName if the managedSeller doesn't have a billingName", () => {
    const managedSeller = {
      id: 123,
      billingName: null,
      billingAddress: null,
      billingCity: 'Bern',
      billingCountryCode: null,
      billingPostOfficeBox: null,
      billingZipCode: '3001',
    };
    const label = createTenantLabel(managedSeller);

    expect(label).toEqual('Bern - 123');
  });

  it("should return the managedSeller's id if they don't have a billingName and city", () => {
    const managedSeller = {
      id: 123,
      billingName: null,
      billingAddress: null,
      billingCity: null,
      billingCountryCode: null,
      billingPostOfficeBox: null,
      billingZipCode: '3001',
    };
    const label = createTenantLabel(managedSeller);

    expect(label).toEqual('123');
  });
});
