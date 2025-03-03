import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material";
import { appTheme } from "./theme/appTheme.js";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={appTheme}>
    <Header />
    <App />
    <Footer />
  </ThemeProvider>,
);
