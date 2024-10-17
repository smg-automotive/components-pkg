import { v4 as uuidv4 } from 'uuid';
import React, { useRef } from 'react';

import {
  useToast as chakraUseToast,
  ToastId,
  ToastPosition,
} from '@chakra-ui/react';

import BareAlert, { BareAlertProps } from '../components/alert/Bare';

export interface ToastOptions extends BareAlertProps {
  position?: ToastPosition;
  id?: string;
}

const useToast = () => {
  const toast = chakraUseToast();
  const toastIdRef = useRef<ToastId[]>([]);

  const closeToast = (toastId: ToastId) => {
    if (toastId) {
      toast.close(toastId);
    }
  };

  return (options: ToastOptions) => {
    const {
      position = 'top',
      id = uuidv4(),
      icon,
      title,
      description,
      link,
      type,
    } = options;

    const toastOptions = {
      onCloseComplete: () =>
        (toastIdRef.current = toastIdRef.current?.filter(
          (toastId) => id !== toastId,
        )),
      position: position,
      render: () => (
        <BareAlert
          type={type}
          icon={icon}
          title={title}
          description={description}
          link={link}
          onClose={() => closeToast(id)}
        />
      ),
    };

    if (toast.isActive(id)) {
      toast.update(id, toastOptions);
    } else {
      toast({ id, ...toastOptions });
      toastIdRef.current.push(id);
    }

    return { closeToast: () => closeToast(id) };
  };
};

export default useToast;
