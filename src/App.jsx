import { useState } from "react";

import "./App.css";
import { Container } from "@mui/material";
import { HomeScreen } from "./views/HomeScreen.jsx";
import { Header } from "./components/Header.jsx";
import { WhyBreathingScreen } from "./views/WhyBreathingScreen.jsx";
import { OurAppScreen } from "./views/OurAppScreen.jsx";
import { GetOurAppScreen } from "./views/GetOurAppScreen.jsx";

function App() {
  return (
    <Container maxWidth={"xl"}>
      <HomeScreen />
      <WhyBreathingScreen />
      <OurAppScreen />
      <GetOurAppScreen />
    </Container>
  );
}

export default App;
