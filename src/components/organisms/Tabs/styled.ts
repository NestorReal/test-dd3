import styled from 'styled-components';
import StyledText from '../../reusableStyledComponents/StyledText';

interface IContainerTabs {
  child: number;
}

export const StyledTabs = styled.div`
  width: 100%;
  height: auto;
  padding: 0 30px;
`;

export const ActionsTabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    margin: 0px;
    border: solid 1px #e1e1e1;
    padding: 3px 12px;
  }
  button:first-child {
    border-radius: 6px 0px 0px 6px;
  }
  button:last-child {
    border-radius: 0px 6px 6px 0px;
  }
`;

export const TitleTabs = styled(StyledText)`
  color: ${(props) => props.theme.text.section.title};
`;

export const ContainerTabs = styled.div<IContainerTabs>`
  width: 100%;
  margin-top: 29px;
  section {
    display: none;
    margin: 0px;
    padding: 0px;
  }
  section:nth-child(${(props) => props.child}) {
    display: block;
  }
`;
