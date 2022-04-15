import { createGlobalStyle } from 'styled-components';
import '@fontsource/roboto-slab';
import '@fontsource/open-sans';

const GlobalStyles = createGlobalStyle`

*,*::before,*::after{
  margin: 0;
  padding: 0;

}

body {
  font-family: 'Roboto Slab';
  overflow-x: hidden;
}

h1,h2,h3,h4,h5,h6{
  margin: 0;
  padding: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

li {
  list-style: none;
}
`;

export default GlobalStyles;
