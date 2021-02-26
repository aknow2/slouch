import React, { useState } from 'react';
import styled from '@emotion/styled'
import './App.css';
import { ThemeProvider } from '@emotion/react';
import RecBtn from './components/RecBtn';
import RecordingCard from './components/RecordingCard';
import { spacing, theme } from './components/theme';
import TagTextField from './components/TagTextField';

const Main = styled.main`
  padding-top: ${spacing(4)};
  padding-left: ${spacing(1)};
  padding-right: ${spacing(1)};
`
const Container = styled.div`
  width: '100%';
  height: '100%';
  box-sizing: 'border-box';
`


const App: React.FC = () => {
  const [ isRecording, setRecording ] = useState(false)
  const [ tag, setTag ] = useState('')
  const onRecording = () => {
    setRecording(true)
  }
  const onStop = () => {
    setRecording(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <Main className="App">
        <Container>
          <RecordingCard>
            <RecBtn
              isRecording={isRecording}
              onRecording={onRecording}
              onStop={onStop}
              disabled={false}
            />
            <TagTextField 
              disabled={isRecording}
              onChange={(ev)=> {
                setTag(ev.target.value)
              }}
              text={tag}
            />
          </RecordingCard>
        </Container>
      </Main>
    </ThemeProvider>
  );
}

export default App;
