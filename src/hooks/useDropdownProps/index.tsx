import { useState } from 'react';

const useDropdownProps = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);
  const closeDropdown = () => setOpen(false);
  const openDropdown = () => setOpen(true);
  return {
    open,
    toggleOpen,
    closeDropdown,
    openDropdown,
  };
};

export default useDropdownProps;
