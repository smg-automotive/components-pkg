import { SharedProps } from '@/src/components/alert';

import { topRightToaster, topToaster } from '@/src/components/toast';

type ToastPosition = 'top' | 'top-right';

export type ToastOptions = {
  position?: ToastPosition;
  onClose?: () => void;
} & Omit<SharedProps, 'position'>;

const toasterMap: Record<ToastPosition, typeof topToaster> = {
  top: topToaster,
  'top-right': topRightToaster,
};

const useToast = () => {
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

export default useToast;
