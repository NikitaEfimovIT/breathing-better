import { Box, Button, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { TitleH1 } from "../components/baseComponents.js";
import { ProsCard } from "../components/WhyBreathingComponents/ProsCard.jsx";
import stress from "../assets/stress.svg";
import mental_calm from "../assets/mental_calm.svg";
import relaxation from "../assets/relaxation.svg";
import boost_energy from "../assets/boost_energy.svg";
export const WhyBreathingScreen = () => {
  const isMdDown = useMediaQuery((theme) => theme.breakpoints.down(1200));

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column",
        alignItems: isMdDown ? "center" : "start",
        minHeight: "100vh",
        textAlign: isMdDown ? "center" : "start",
        flexShrink: 0,
        marginTop: "5em",
      }}
    >
      <TitleH1>Why breathing is your choice?</TitleH1>
      <Grid
        container
        spacing={5}
        flexDirection={isMdDown ? "column" : "row"}
        justifyContent={"center"}
        alignItems={"start"}
        maxWidth="100%"
        flexWrap="wrap"
      >
        <Grid item xs="auto">
          <ProsCard
            title={"Instant Stress Relief"}
            text={"Deep breathing helps calm your nervous system, reducing anxiety and stress in just minutes."}
            img={stress}
          />
        </Grid>
        <Grid item xs="auto">
          <ProsCard
            title={"Better Focus & Mental Clarity"}
            text={
              "Breathwork increases oxygen flow to your brain, improving focus, memory, and productivity—perfect for studying or staying sharp during the day."
            }
            img={mental_calm}
          />
        </Grid>
        <Grid item xs="auto">
          <ProsCard
            title={"Improved Sleep & Relaxation"}
            text={
              "Slow, deep breathing activates your body's relaxation mode, helping you unwind and sleep better, so you wake up refreshed and ready to go."
            }
            img={relaxation}
          />
        </Grid>
        <Grid item xs="auto">
          <ProsCard
            title={"More Energy & Physical Performance"}
            text={
              "Proper breathing boosts endurance, improves athletic performance, and keeps you feeling energized throughout the day."
            }
            img={boost_energy}
          />
        </Grid>
      </Grid>
      <Box display={"flex"} justifyContent={isMdDown ? "center" : "end"} flexDirection={"row"} width={"100%"}>
        <Button variant={"contained"} style={{ borderRadius: 15, fontSize: "20px" }}>
          Want to try? Click here!
        </Button>
      </Box>
    </Box>
  );
};
