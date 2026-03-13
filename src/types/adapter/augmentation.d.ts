import '@chakra-ui/react';

/**
 * Some Chakra v3 types read breakpoint condition keys from generated modules,
 * not from the top-level `@chakra-ui/react` module.
 *
 * We augment both the top-level module and the generated-conditions modules.
 */

// 1) Top-level (sometimes used)
declare module '@chakra-ui/react' {
  interface Conditions {
    xs: string;
    '2xs': string;
  }
}

// 2) Generated conditions (commonly used by system.gen.d.ts)
declare module '@chakra-ui/react/dist/styled-system/generated/conditions.gen' {
  export interface Conditions {
    xs: string;
    '2xs': string;
  }
}

declare module '@chakra-ui/react/dist/types/styled-system/generated/conditions.gen' {
  export interface Conditions {
    xs: string;
    '2xs': string;
  }
}

export {};
