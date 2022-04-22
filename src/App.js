import React from 'react';
import { Main } from './components/Main';
import { UseReducerExample } from './components/UseReducerExample';
import { Wrapper } from './components/Wrapper';
import { ThemeProvider } from './context/themeContext';

function App() {
  return (
    <>
      <ThemeProvider>
        <Wrapper>
          <Main />
          <UseReducerExample />
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
