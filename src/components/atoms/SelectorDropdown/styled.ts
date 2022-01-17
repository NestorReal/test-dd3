import styled from 'styled-components';
import space from '../../../config/spacing';
import fontTypes from '../../../config/font';
import ShadowBox from '../../reusableStyledComponents/ShadowBox';

interface IMultiselectorContainer {
  open: boolean;
}

export const StyledSelector = styled.div`
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.borders.selector};
  background: ${(props) => props.theme.background.selector};
  max-width: 260px;
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
  max-width: 338px;
  margin-top: ${space[2]};
  overflow: auto;
  max-height: ${(props) => (props.open ? '400px' : 0)};
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: all 0.4s;
`;

export const SelectorTitle = styled.div`
  color: ${(props) => props.theme.text.filters.subtitle};
  ${fontTypes.paragraph3}
`;
