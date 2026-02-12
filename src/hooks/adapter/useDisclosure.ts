import useDisclosureComponents from '../useDisclosure';

type UseDisclosureOptions = {
  onOpen?: () => void;
  onClose?: () => void;
};

export const useDisclosure = (options: UseDisclosureOptions = {}) => {
  const { open, onClose, onToggle, setOpen } = useDisclosureComponents();
  const { onOpen: onOpenHandler, onClose: onCloseHandler } = options;

  return {
    isOpen: open,
    onClose: () => {
      onClose();
      onCloseHandler?.();
    },
    onToggle,
    setOpen,
    onOpen: () => {
      setOpen(true);
      onOpenHandler?.();
    },
  };
};
