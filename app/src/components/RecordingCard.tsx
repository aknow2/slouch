import styled from '@emotion/styled';
import { spacing } from './theme';

const Card = styled.div`
  padding: ${spacing(3)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  height: 150px;
  width: 400px;
  border-radius: 75px;
  background: #e0e0e0;
  box-shadow: inset 5px 5px 10px #bebebe,
              inset -5px -5px 10px #ffffff;
`

const RecordingCard: React.FC = ({ children }) => {
  return (
    <Card>
      {children}
    </Card>);
}

export default RecordingCard;
