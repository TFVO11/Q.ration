import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#fffff',
      main: '#D9D9D9',
      dark: '#002884',
      contrastText: '#000',
      blue: "#1150F2",
      footerText: "#605C5C",
    },
    secondary: {
      light: '#D1D1D1',
      main: '#D1D1D1',
      dark: '#ba000d',
      contrastText: '#fff',
    },
    third: {
      light: '#D1D1D1',
      main: '#1150F2',
      dark: '#ba000d',
      contrastText: '#fff',
    },
  },
});

export default theme;