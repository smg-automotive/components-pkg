import { SharedProps } from 'src/components/alert';

import { topToaster } from './TopToaster';

import { topRightToaster } from './TopRightToast';

export type ToastOptions = {
  position?: 'top' | 'top-right';
  onClose?: () => void;
} & SharedProps;

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
