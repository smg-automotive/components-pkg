import React from 'react';

import { topToaster } from 'src/hooks/useToast/TopToaster';

import { topRightToaster } from './TopRightToast';

export interface ToastOptions {
  position?: 'top' | 'top-right';
  description: string;
  title?: string;
  link?: {
    as?: 'link' | 'button' | React.ElementType;
    text: string;
    url?: string;
    isExternal?: boolean;
    onClick?: () => void;
  };
  icon?: React.ReactNode;
  type?: 'error' | 'warning' | 'info' | 'success';
  onClose?: () => void;
}

const toasterMap = {
  top: topToaster,
  'top-right': topRightToaster,
};

export const useToast = () => {
  return (options: ToastOptions) => {
    const {
      position = 'top',
      icon,
      title,
      description,
      link,
      type,
      onClose,
    } = options;

    const toasterInstance = toasterMap[position];

    const toasterId = crypto.randomUUID();

    toasterInstance.create({
      id: toasterId,
      title,
      description,
      closable: Boolean(onClose),
      meta: {
        type,
        link,
        icon,
        onClose: () => {
          onClose?.();
          toasterInstance.dismiss(toasterId);
        },
      },
    });
    return { closeToast: () => toasterInstance.dismiss(toasterId) };
  };
};
