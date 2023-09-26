import { Global } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import Home from "./components/Home";
import globalStyle from "./global/globalStyle";
import { ColorModeContext, useMode } from "./global/theme";
function App() {
  const [theme, colorMode] = useMode("en");
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Global styles={globalStyle} />
          <Home />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
