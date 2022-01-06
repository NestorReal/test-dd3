import styled from 'styled-components';
import space from '../../../config/spacing';
import fontTypes from '../../../config/font';
import ShadowBox from '../../reusableStyledComponents/ShadowBox';

interface IMultiselectorContainer {
  open: boolean;
}

export const SelectorTitle = styled.div`
  color: ${(props) => props.theme.text.filters.subtitle};
  ${fontTypes.paragraph3}
`;

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
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: all 0.6s;
  overflow: auto;
`;

export const PillsContainer = styled.div`
  overflow-x: auto;
  display: flex;
  align-items: center;
  margin: ${space[2]};
  white-space: nowrap;
`;

export const IdividualPillContainer = styled.div`
  padding: ${space[1]};
`;
