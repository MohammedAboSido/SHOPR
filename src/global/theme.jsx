import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { createContext, useMemo, useState } from "react";

export const getDesignTokens = (mode, lang) => ({
  palette: {
    mode,
    dir: lang === "en" ? "ltr" : "rtl",
    ...(mode === "light"
      ? {
          // palette values for light mode
          text: {
            primary: "#2B3445",
          },

          myColor: {
            main: "#F6F9FC",
          },

          bgPrimary: {
            main: "#121212",
          },

          bg: {
            main: "#F6F6F6",
          },

          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[300],
          },
        }
      : {
          // palette values for dark mode
          text: {
            primary: "#fff",
          },

          myColor: {
            main: "#252b32",
          },

          bgPrimary: {
            main: "#fff",
          },

          bg: {
            main: "#1D2021",
          },

          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[800],
          },
        }),
  },
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = (lang) => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(
    () => createTheme(getDesignTokens(mode, lang)),
    [mode, lang]
  );
  return [theme, colorMode];
};
