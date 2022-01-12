import styled from 'styled-components';
import space from '../../../config/spacing';
import StyledText from '../../reusableStyledComponents/StyledText';

export const ContainerSection = styled.div`
  width: 100%;
  padding: 0 ${space[4]};
  position: relative;
  .actions {
    width: 210px;
    position: absolute;
    top: 0px;
    right: ${space[4]};
  }

  .header {
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const TitleSection = styled(StyledText)`
  color: ${(props) => props.theme.text.datacard.title};
`;
