import React from 'react';
import styled from '@emotion/styled'
import './App.css';
import { ThemeProvider } from '@emotion/react';

const spacing = (x: number = 1) => 8 * x
const theme = {
  spacing,
}

interface Props {
  onClick?: (ev: MouseEvent) => void

}


const Button = styled.div`
  width: 64px;
  height: 64px;
  user-select: none;
  border: none;
  text-decoration: none;
  border-radius: 32px;
  background: linear-gradient(145deg, #fce4ec, #e3cdd4);
  box-shadow:  6px 6px 13px #d6c2c9,
              -6px -6px 13px #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: linear-gradient(145deg, #e3cdd4, #fce4ec);
  }
  &::active {
    background: #ff1744;
    box-shadow: inset 20px 20px 60px #d9143a,
            inset -20px -20px 60px #ff1a4e;
  }
`

const Main = styled.main`
  padding-top: ${spacing(4)};
`

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main className="App">
        <Button>Rec.</Button>
      </Main>
    </ThemeProvider>
  );
}

export default App;
