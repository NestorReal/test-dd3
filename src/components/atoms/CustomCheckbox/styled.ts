import styled from 'styled-components';
import fontTypes from '../../../config/font';

export interface LabelContainerProps {
  disabled: boolean;
}
export const StyledCheckboxInput = styled.input.attrs((props) => ({
  cursor: props.disabled ? 'not-allowed' : 'pointer',
}))``;

export const Checkmark = styled.span`
  position: absolute;
  left: 0px;
  top: 0px;
  height: 1em;
  width: 1em;
  border: 1px solid gray;
  &::after {
    content: '';
    position: absolute;
    display: none;
  }
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
`;

export const LabelContainer = styled.label<LabelContainerProps>`
  color: ${(props) => props.theme.text.filters.option};
  display: block;
  position: relative;
  padding-left: 25px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  ${fontTypes.paragraph2}
  line-height: 1.15; //overwrite line height of fontTypes constant, for aesthetics purpose

  /* Hide the browser's default checkbox */
  & ${StyledCheckboxInput} {
    position: relative;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  & ${StyledCheckboxInput}:checked ~ ${Checkmark} {
    background-color: ${(props) => props.theme.background.checkbox};
    border: 1px solid ${(props) => props.theme.background.checkbox};
  }
  & ${StyledCheckboxInput}:checked ~ ${Checkmark}:after {
    display: block;
  }
  & ${Checkmark}:after {
    position: absolute;
    left: 6.2px;
    top: 2px;
    width: 3px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    border-radius: 71px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
