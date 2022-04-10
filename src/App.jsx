import './App.css';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { dark } from './styles/Themes';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <main className='App' data-scroll-container>
          <Home />
          <About />
          <Work />
        </main>
      </ThemeProvider>
    </>
  );
};

export default App;
