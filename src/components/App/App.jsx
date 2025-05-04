import AuthProvider from "../../context/AuthProvider.jsx";
import AppRoutes from "../AppRoutes.jsx";
import "./App.css";
import ThemeProvider from "../Theme/ThemeProvider.jsx";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeContext";
import { themes } from "../Theme/themes.js";

function AppContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledThemeProvider theme={themes[theme]}>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </StyledThemeProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
