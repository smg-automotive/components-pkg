import useDisclosureComponents from '../useDisclosure';

export const useDisclosure = () => {
  const { open, onClose, onToggle, setOpen } = useDisclosureComponents();

  return {
    isOpen: open,
    onClose,
    onToggle,
    setOpen,
    onOpen: () => setOpen(true),
  };
};
