import React, { useState } from 'react';
import {
  SelectorTitle, StyledSelector, IconContainer, MultiselectorContainer,
} from './styled';
import DoubleArrow from '../../icons/DoubleArrow';
import useCloseOnClickOutside from '../../../hooks/useCloseOnClickOutside';

interface ISelectorDropdownProps {
  /**
   * A react node to show content inside the selected space.
   */
  selectionContent: React.ReactNode;
  /**
   * A react node which is going to be used to render content when dropdown is opened.
   */
  dropDownContent: React.ReactNode;
  /**
   * Title for the selector
   */
  selectorTitle: string;
}

const SelectorDropdown = ({
  selectionContent,
  dropDownContent,
  selectorTitle,
}: ISelectorDropdownProps) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);
  const close = () => setOpen(false);
  const { ref } = useCloseOnClickOutside(open, close);

  return (
    <>
      <SelectorTitle>{selectorTitle}</SelectorTitle>
      <StyledSelector onMouseDown={toggleOpen}>
        {selectionContent}

        <IconContainer>
          <DoubleArrow />
        </IconContainer>
      </StyledSelector>

      <MultiselectorContainer ref={ref} open={open}>
        {dropDownContent}
      </MultiselectorContainer>
    </>
  );
};

export default SelectorDropdown;
