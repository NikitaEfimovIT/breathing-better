import { useState } from "react";

import "./App.css";
import { Container } from "@mui/material";
import { HomeScreen } from "./views/HomeScreen.jsx";
import { WhyBreathingScreen } from "./views/WhyBreathingScreen.jsx";
import { OurAppScreen } from "./views/OurAppScreen.jsx";
import { GetOurAppScreen } from "./views/GetOurAppScreen.jsx";
import { Element } from "react-scroll";
function App() {
  return (
    <Container maxWidth={"xl"} style={{ overflowX: "hidden", display: "flow-root", overflowClipMargin: "1rem" }}>
      <Element name={"section1"}>
        <HomeScreen />
      </Element>
      <Element name={"section2"}>
        <WhyBreathingScreen />
      </Element>
      <Element name={"section3"}>
        <OurAppScreen />
      </Element>
      <Element name={"section4"}>
        <GetOurAppScreen />
      </Element>
    </Container>
  );
}

export default App;
