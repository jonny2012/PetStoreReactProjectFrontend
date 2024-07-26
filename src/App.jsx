import AppRouter from "../AppRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";


function App() {

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Montserrat',
        'sans-serif'
      ].join(','),
    }
  });
  return(
  <ThemeProvider theme={theme}>
  <AppRouter />
  </ThemeProvider>
  )
}

export default App;
