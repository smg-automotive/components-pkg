import React, { ReactNode, useRef } from 'react';

import {
  useToast as chakraUseToast,
  ToastId,
  ToastPosition,
} from '@chakra-ui/react';

import { Alert } from '../components';

interface ToastOptions {
  position?: ToastPosition;
  icon: ReactNode;
  title: string;
  description: string;
  type: 'error' | 'warning' | 'info' | 'success';
  link?: {
    text: string;
    url: string;
  };
}

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
    const { position = 'top', icon, title, description, link, type } = options;

    const toastId = toast({
      position: position,
      render: () => (
        <Alert
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
  };
};

export default useToast;
