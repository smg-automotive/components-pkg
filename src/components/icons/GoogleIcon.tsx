import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const GoogleIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Google',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Google icon</title>
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <path
        fill="#4285F4"
        d="M12.164 10.68v3.161h4.393a3.764 3.764 0 0 1-1.64 2.457l2.65 2.055C19.11 16.928 20 14.836 20 12.35c0-.578-.052-1.135-.149-1.67h-7.688Z"
      />
      <path
        fill="#34A853"
        d="m7.588 13.717-.598.457-2.115 1.648c1.343 2.664 4.096 4.504 7.287 4.504 2.204 0 4.052-.727 5.403-1.974l-2.65-2.055c-.727.49-1.654.786-2.753.786-2.122 0-3.925-1.432-4.571-3.361l-.003-.005Z"
      />
      <path
        fill="#FBBC05"
        d="M4.876 8.504A8.063 8.063 0 0 0 4 12.163c0 1.32.32 2.56.876 3.658 0 .008 2.716-2.107 2.716-2.107a4.891 4.891 0 0 1-.26-1.552c0-.541.097-1.06.26-1.55L4.876 8.503Z"
      />
      <path
        fill="#EA4335"
        d="M12.163 7.25c1.202 0 2.27.416 3.124 1.218l2.338-2.338C16.207 4.809 14.367 4 12.163 4 8.97 4 6.218 5.833 4.875 8.505l2.716 2.107c.646-1.93 2.45-3.362 4.572-3.362Z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
