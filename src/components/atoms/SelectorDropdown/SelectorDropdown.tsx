import React from 'react';
import {
  OverallSelectorContainer,
  SelectorTitle,
  StyledSelector,
  IconContainer,
  MultiselectorContainer,
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
  open: boolean;
  toggleOpen: React.MouseEventHandler<HTMLDivElement>;
  close: Function;
}

const SelectorDropdown = ({
  selectionContent,
  dropDownContent,
  selectorTitle,
  open,
  toggleOpen,
  close,
}: ISelectorDropdownProps) => {
  const { ref } = useCloseOnClickOutside(open, close);

  return (
    <OverallSelectorContainer>
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
    </OverallSelectorContainer>
  );
};

export default SelectorDropdown;
