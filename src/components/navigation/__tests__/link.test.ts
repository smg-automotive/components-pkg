import { Environment } from 'src/types/environment';
import { Entitlement } from 'src/types/entitlements';
import { Brand } from 'src/types/brand';

import { Link } from '../link';
import { UserType } from '../header/types';

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
        userType: UserType.Private,
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
        userType: UserType.Private,
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
        userType: UserType.Private,
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
        userType: UserType.Professional,
        userEntitlements: [],
      });

      expect(isVisibleForProfessionalUsers).toEqual(false);

      const isVisibleForGuestUsers = Link['determineVisibility']({
        hasEntitlement: true,
        visibilitySettings: {
          userType: {
            private: true,
            professional: true,
            guest: false,
          },
          brand: {
            autoscout24: true,
            motoscout24: true,
          },
        },
        brand: Brand.AutoScout24,
        userType: UserType.Guest,
        userEntitlements: [],
      });

      expect(isVisibleForGuestUsers).toEqual(false);
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
        userType: UserType.Private,
        userEntitlements: [restrictedEntitlement],
        entitlementConfig: {
          hideIfEntitlementIsPresent: restrictedEntitlement,
          singleRequiredEntitlement: [Entitlement.Optimizer],
        },
      });

      expect(isVisible).toEqual(false);
    });
    it('should return false if entitlement is missing with fallback link', () => {
      // const restrictedEntitlement = Entitlement.AutoRadar;
      // const isVisible = Link['determineVisibility']({
      //   hasEntitlement: true,
      //   visibilitySettings: {
      //     userType: {
      //       private: true,
      //       professional: true,
      //     },
      //     brand: {
      //       autoscout24: true,
      //       motoscout24: true,
      //     },
      //   },
      //   brand: Brand.MotoScout24,
      //   userType: UserType.Private,
      //   userEntitlements: [restrictedEntitlement],
      //   entitlementConfig: {
      //     hideIfEntitlementIsPresent: restrictedEntitlement,
      //     singleRequiredEntitlement: [Entitlement.Optimizer],
      //   },
      // });

      expect(false).toEqual(true);
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
        userType: UserType.Private,
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
        userType: UserType.Private,
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
        userType: UserType.Guest,
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
        userType: UserType.Guest,
        userEntitlements: [],
      });

      expect(isVisible).toEqual(false);
    });
  });
});
