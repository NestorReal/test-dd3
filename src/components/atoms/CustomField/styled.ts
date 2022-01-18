import styled from 'styled-components';
import fontTypes from '../../../config/font';
import space from '../../../config/spacing';
import { inputTypographies } from '../../../types/typography';

interface IInputContainer {
  height?: number;
  error: boolean;
}

interface IStyledInput {
  typography: inputTypographies;
  isCleaneable: boolean;
}

interface IStyledLabel {
  typography: inputTypographies;
}

export const InputContainer = styled.div<IInputContainer>`
  display: flex;
  background: ${(props) => props.theme.background.field};
  border: 1px solid
    ${(props) => (props.error ? props.theme.borders.field.error : props.theme.borders.field.main)};
  border-radius: 8px;
  height: ${(props) => (props.height ? props.height : '40px')};
  margin-bottom: ${space[2]};
  height: ${(props) => (props.height ? `${props.height}px` : '')};

  &:focus {
    border: 2px solid ${(props) => props.theme.borders.field.main};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${space[3]} 0 ${space[3]} ${space[3]};
`;

export const StyledInput = styled.input<IStyledInput>`
  background: ${(props) => props.theme.background.field};
  color: ${(props) => props.theme.text.field.main};
  outline: none;
  border: none;
  width: 100%;
  border-radius: 8px;
  padding-left: ${space[3]};
  ${(props) => fontTypes[`${props.typography}`]}

  &::placeholder {
    color: ${(props) => props.theme.text.field.placeholder};
  }
`;

export const StyledLabel = styled.label<IStyledLabel>`
  color: ${(props) => props.theme.text.field.label};
  margin-bottom: ${space[2]};
  ${(props) => fontTypes[`${props.typography}`]}
`;

export const RequiredTag = styled.span`
  color: ${(props) => props.theme.text.field.required};
`;

export const ErrorLabel = styled.div<IStyledLabel>`
  color: ${(props) => props.theme.text.field.error};
  ${(props) => fontTypes[`${props.typography}`]};
`;

export const CleanContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: ${space[3]};
`;
