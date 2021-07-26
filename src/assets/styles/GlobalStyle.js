import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import-normalize;

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,700;1,400&display=swap');

html{
  box-sizing:border-box;
}

*,*::after, *::before{
  box-sizing:inherit;
}

body{
font-family: 'Montserrat', sans-serif;
}

a, button{
font-family: 'Montserrat', sans-serif;
}

p{
  margin:0;
  padding:0;
}

ul, li{
  padding:0;
  margin:0;
  list-style-type:none;
}
`;

export default GlobalStyle;
