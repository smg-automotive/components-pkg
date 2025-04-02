import { Auth0UserType } from '@smg-automotive/auth';

import { Entitlement } from 'src/types/entitlements';
import { Brand } from 'src/types/brand';

import { Link } from '../link';
import { UserTypeExternal } from '../header/types';

describe('Link', () => {
  describe('determineVisiblity', () => {
    it('should return false if visibilitySettings for given brand are false', () => {
      const isVisibleOnMotoscout = Link['determineVisibility']({
        hasEntitlement: true,
        visibilitySettings: {
          userType: {
            private: true,
            professional: true,
          },
          brand: {
            autoscout24: true,
            motoscout24: false,
          },
        },
        brand: Brand.MotoScout24,
        userType: Auth0UserType.Private,
        userEntitlements: [],
      });

      expect(isVisibleOnMotoscout).toEqual(false);

      const isVisibleOnAutoscout = Link['determineVisibility']({
        hasEntitlement: true,
        visibilitySettings: {
          userType: {
            private: true,
            professional: true,
          },
          brand: {
            autoscout24: false,
            motoscout24: true,
          },
        },
        brand: Brand.AutoScout24,
        userType: Auth0UserType.Private,
        userEntitlements: [],
      });

      expect(isVisibleOnAutoscout).toEqual(false);
    });
    it('should return false if visibilitySettings for given user type are false', () => {
      const isVisibleForPrivateUsers = Link['determineVisibility']({
        hasEntitlement: true,
        visibilitySettings: {
          userType: {
            private: false,
            professional: true,
          },
          brand: {
            autoscout24: true,
            motoscout24: true,
          },
        },
        brand: Brand.MotoScout24,
        userType: Auth0UserType.Private,
        userEntitlements: [],
      });

      expect(isVisibleForPrivateUsers).toEqual(false);

      const isVisibleForProfessionalUsers = Link['determineVisibility']({
        hasEntitlement: true,
        visibilitySettings: {
          userType: {
            private: true,
            professional: false,
          },
          brand: {
            autoscout24: true,
            motoscout24: true,
          },
        },
        brand: Brand.AutoScout24,
        userType: Auth0UserType.Professional,
        userEntitlements: [],
      });

      expect(isVisibleForProfessionalUsers).toEqual(false);
    });
    it('should return false if user have restricted entitlement', () => {
      const restrictedEntitlement = Entitlement.AutoRadar;
      const isVisible = Link['determineVisibility']({
        hasEntitlement: true,
        visibilitySettings: {
          userType: {
            private: true,
            professional: true,
          },
          brand: {
            autoscout24: true,
            motoscout24: true,
          },
        },
        brand: Brand.MotoScout24,
        userType: Auth0UserType.Private,
        userEntitlements: [restrictedEntitlement],
        entitlementConfig: {
          hideIfEntitlementIsPresent: restrictedEntitlement,
          singleRequiredEntitlement: [Entitlement.Optimizer],
        },
      });

      expect(isVisible).toEqual(false);
    });
    it('should return false if entitlement is missing and hideIfRequiredEntitlementIsMissing is set to false', () => {
      const hideIfRequiredEntitlementIsMissingMock = true;
      const isVisible = Link['determineVisibility']({
        hasEntitlement: false,
        visibilitySettings: {
          userType: {
            private: true,
            professional: true,
          },
          brand: {
            autoscout24: true,
            motoscout24: true,
          },
        },
        brand: Brand.MotoScout24,
        userType: Auth0UserType.Private,
        userEntitlements: [],
        entitlementConfig: {
          hideIfRequiredEntitlementIsMissing:
            hideIfRequiredEntitlementIsMissingMock,
          singleRequiredEntitlement: [Entitlement.Optimizer],
        },
      });

      expect(isVisible).toEqual(false);
    });
    it('should return false if visibility settings for user type are false', () => {
      const privateUserVisibility = false;
      const isVisible = Link['determineVisibility']({
        hasEntitlement: true,
        visibilitySettings: {
          userType: {
            private: privateUserVisibility,
            professional: true,
          },
          brand: {
            autoscout24: true,
            motoscout24: true,
          },
        },
        brand: Brand.MotoScout24,
        userType: Auth0UserType.Private,
        userEntitlements: [],
      });

      expect(isVisible).toEqual(privateUserVisibility);
    });
    it('should return true if visibility settings for user type are true', () => {
      const privateUserVisibility = true;
      const isVisible = Link['determineVisibility']({
        hasEntitlement: true,
        visibilitySettings: {
          userType: {
            private: privateUserVisibility,
            professional: true,
          },
          brand: {
            autoscout24: true,
            motoscout24: true,
          },
        },
        brand: Brand.MotoScout24,
        userType: Auth0UserType.Private,
        userEntitlements: [],
      });

      expect(isVisible).toEqual(privateUserVisibility);
    });
    it('should return true if visibility settings for user type guest are undefined', () => {
      const isVisible = Link['determineVisibility']({
        hasEntitlement: true,
        visibilitySettings: {
          userType: {
            private: false,
            professional: false,
          },
          brand: {
            autoscout24: true,
            motoscout24: true,
          },
        },
        brand: Brand.MotoScout24,
        userType: UserTypeExternal.Guest,
        userEntitlements: [],
      });

      expect(isVisible).toEqual(true);
    });
    it('should return false if visibility settings for user type guest are false', () => {
      const guestUserVisibility = false;
      const isVisible = Link['determineVisibility']({
        hasEntitlement: true,
        visibilitySettings: {
          userType: {
            private: false,
            professional: false,
            guest: guestUserVisibility,
          },
          brand: {
            autoscout24: true,
            motoscout24: true,
          },
        },
        brand: Brand.MotoScout24,
        userType: UserTypeExternal.Guest,
        userEntitlements: [],
      });

      expect(isVisible).toEqual(false);
    });
  });
});
