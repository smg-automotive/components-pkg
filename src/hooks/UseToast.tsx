import React, { ReactNode, useRef } from 'react';

import {
  useToast as chakraUseToast,
  ToastId,
  ToastPosition,
} from '@chakra-ui/react';

import { Alert } from '../components';

interface ToastOptions {
  description: string;
  icon: ReactNode;
  type: 'error' | 'warning' | 'info' | 'success';
  position?: ToastPosition;
  title?: string;
  link?: {
    text: string;
    url: string;
    isExternal?: boolean;
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
