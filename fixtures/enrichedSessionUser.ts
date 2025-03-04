import { EnrichedSessionUser, MappedUserType } from '@smg-automotive/auth';

export const enrichedSessionUser: EnrichedSessionUser = {
  email: 'foo@bar.com',
  email_verified: true,
  sub: '123',
  sid: '123',
  forceTenantSelection: true,
  sellerId: '123',
  sellerIds: ['123', '456'],
  isImpersonated: false,
  isMultiTenantUser: true,
  userId: '123',
  userType: MappedUserType.Professional,
  entitlements: null,
  managedSellers: [
    {
      id: 991,
      billingAddress: null,
      billingCity: null,
      billingCountryCode: null,
      billingName: 'Seller 1',
      billingPostOfficeBox: null,
      billingZipCode: null,
    },
    {
      id: 992,
      billingAddress: null,
      billingCity: null,
      billingCountryCode: null,
      billingName: 'Seller 2',
      billingPostOfficeBox: null,
      billingZipCode: null,
    },
  ],
};
