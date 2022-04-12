import './App.css';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { dark } from './styles/Themes';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <main className='App'>
          <Home />
          <About />
          <Work />
          <Contact />
        </main>
      </ThemeProvider>
    </>
  );
};

export default App;
