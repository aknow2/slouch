import styled from '@emotion/styled'

const distance = 10;
const RecordingBtn = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
  user-select: none;
  border: none;
  text-decoration: none;
  border-radius: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow: ${distance/2}px ${distance/2}px ${distance*2}px #bebebe,
              -${distance/2}px -${distance/2}px ${distance*2}px #ffffff;
  ::after {
    position: absolute;
    background: red;
    border-radius: 3px;
    content: '';
    width: 32px;
    height: 32px;
  }
`

const ActiveBtn = styled.div`
  width: 64px;
  height: 64px;
  user-select: none;
  border: none;
  text-decoration: none;
  border-radius: 32px;
  background: linear-gradient(145deg, #f0f0f0, #cacaca);
  box-shadow: ${distance}px ${distance}px 12px #bebebe,
              -${distance}px -${distance}px 12px #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
      ::after {
        position: absolute;
        background: red;
        content: '';
        border-radius: 50%;
        width: 32px;
        height: 32px;
      };
  }
  ::after {
    position: absolute;
    background: #818181;
    content: '';
    border-radius: 50%;
    width: 18px;
    height: 18px;
  }
`

interface Props {
  isRecording: boolean
  disabled: boolean
  onRecording: () => void
  onStop: () => void
}

const RecBtn: React.FC<Props> = ({ isRecording, onStop, onRecording }) => {
  return (
    <>
      {
        isRecording && <RecordingBtn onClick={onStop} />
      }
      {
        !isRecording && <ActiveBtn onClick={onRecording} />
      }
    </>)
}

export default RecBtn;
