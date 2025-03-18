import { MappedUserType, MergedUser } from '@smg-automotive/auth';

const shared = {
  id: '123',
  isImpersonated: false,
  exp: 123,
};

export const privateSeller = (
  props: Partial<Exclude<MergedUser, 'userType' | 'isMultiTenantUser'>> = {},
): MergedUser => ({
  ...shared,
  email: 'amir@private.com',
  userName: 'Amir Private',
  sellerId: '6001',
  sellerIds: ['6001'],
  userType: MappedUserType.Private,
  ...props,
});

export const professionalSeller = (
  props: Partial<Exclude<MergedUser, 'userType'>> = {},
): MergedUser => ({
  ...shared,
  email: 'amir@professional.com',
  userName: 'Amir Professional',
  sellerId: '6001',
  sellerIds: ['6001'],
  userType: MappedUserType.Professional,
  ...props,
});
