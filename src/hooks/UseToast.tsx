import React, { useRef } from 'react';

import {
  useToast as chakraUseToast,
  ToastId,
  UseToastOptions,
} from '@chakra-ui/react';

import BareAlert, { BareAlertProps } from '../components/alert/Bare';

export type ToastOptions = BareAlertProps &
  Pick<UseToastOptions, 'duration' | 'position'>;

const useToast = () => {
  const toast = chakraUseToast();
  const toastIdRef = useRef<ToastId[]>([]);

  const closeToast = (toastId: ToastId) => {
    if (toastId) {
      toast.close(toastId);
      toastIdRef.current = toastIdRef.current?.filter((id) => id !== toastId);
    }
  };

  return (options: ToastOptions) => {
    const {
      position = 'top',
      icon,
      title,
      description,
      link,
      type,
      duration,
    } = options;

    const toastId = toast({
      duration,
      position: position,
      render: () => (
        <BareAlert
          type={type}
          icon={icon}
          title={title}
          description={description}
          link={link}
          onClose={() => closeToast(toastId)}
        />
      ),
    });

    toastIdRef.current.push(toastId);

    return { closeToast: () => closeToast(toastId) };
  };
};

export default useToast;
