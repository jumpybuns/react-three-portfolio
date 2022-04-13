import './App.css';
import GlobalStyles from './styles/GlobalStyles';
import styled, { ThemeProvider } from 'styled-components';
import { dark } from './styles/Themes';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

const Main = styled.div`
  height: 400vh;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <Main className='App'>
          <Home />
          <About />
          <Work />
          <Contact />
        </Main>
      </ThemeProvider>
    </>
  );
};

export default App;
