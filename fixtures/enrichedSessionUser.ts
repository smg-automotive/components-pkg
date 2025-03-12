import { Auth0UserType, EnrichedSessionUser } from '@smg-automotive/auth';

import {
  privateSellerEntitlements,
  professionalSellerEntitlements,
} from './entitlements';

const shared = {
  email_verified: true,
  sub: 'qwerty',
  sid: 'asdfg',
  forceTenantSelection: false,
  isImpersonated: false,
  userId: '123',
};

export const privateSeller = (
  props: Partial<
    Exclude<EnrichedSessionUser, 'userType' | 'isMultiTenantUser'>
  > = {},
): EnrichedSessionUser => ({
  ...shared,
  email: 'amir@private.com',
  sellerId: '6001',
  sellerIds: ['6001'],
  entitlements: privateSellerEntitlements,
  managedSellers: [],
  isMultiTenantUser: false,
  userType: Auth0UserType.Private,
  ...props,
});

export const professionalSeller = (
  props: Partial<Exclude<EnrichedSessionUser, 'userType'>> = {},
) => ({
  ...shared,
  email: 'amir@professional.com',
  sellerId: '6001',
  sellerIds: ['6001'],
  entitlements: professionalSellerEntitlements,
  isMultiTenantUser: false,
  managedSellers: [],
  userType: Auth0UserType.Professional,
  ...props,
});

export const multiTenantSeller = (
  props: Partial<
    Exclude<EnrichedSessionUser, 'userType' | 'isMultiTenantUser'>
  > = {},
) =>
  professionalSeller({
    isMultiTenantUser: true,
    sellerId: '6001',
    sellerIds: ['6001', '6002', '6003', '6004'],
    managedSellers: [
      {
        id: 6001,
        billingAddress: null,
        billingCity: 'Zurich',
        billingCountryCode: null,
        billingName: 'Garage Amir',
        billingPostOfficeBox: null,
        billingZipCode: '8000',
      },
      {
        id: 6002,
        billingAddress: null,
        billingCity: 'Basel',
        billingCountryCode: null,
        billingName: 'Garage Amir',
        billingPostOfficeBox: null,
        billingZipCode: '4001',
      },
      {
        id: 6003,
        billingAddress: null,
        billingCity: 'Bern',
        billingCountryCode: null,
        billingName: 'Garage Amir',
        billingPostOfficeBox: null,
        billingZipCode: '3001',
      },
      {
        id: 6004,
        billingAddress: null,
        billingCity: 'Geneva',
        billingCountryCode: null,
        billingName:
          'I am a garage with a very long name to see how line breaks work',
        billingPostOfficeBox: null,
        billingZipCode: '1201',
      },
    ],
    ...props,
  });

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
  userType: Auth0UserType.Professional,
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
