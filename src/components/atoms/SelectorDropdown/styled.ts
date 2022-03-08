import styled from 'styled-components';
import space from '../../../config/spacing';
import fontTypes from '../../../config/font';
import ShadowBox from '../../reusableStyledComponents/ShadowBox';

interface IMultiselectorContainer {
  open: boolean;
}

export const OverallSelectorContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const StyledSelector = styled.div`
  height: 40px;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.borders.selector};
  background: ${(props) => props.theme.background.selector};
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const IconContainer = styled.div`
  padding: ${space[3]};
  display: flex;
  align-items: center;
`;

export const MultiselectorContainer = styled(ShadowBox)<IMultiselectorContainer>`
  background-color: ${(props) => props.theme.background.selector};
  border: 1px solid ${(props) => props.theme.borders.selector};
  border-radius: 8px;
  position: absolute;
  width: 100%;
  margin-top: ${space[2]};
  overflow: auto;
  max-height: ${(props) => (props.open ? '400px' : 0)};
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: all 0.4s;
  z-index: 99;
`;

export const SelectorTitle = styled.div`
  color: ${(props) => props.theme.text.filters.subtitle};
  ${fontTypes.paragraph3}
`;
