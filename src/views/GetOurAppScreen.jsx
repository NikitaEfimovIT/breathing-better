import { Box, Container, useMediaQuery } from "@mui/material";
import { TitleBig } from "./HomeScreen.jsx";
import { Text, TitleH3 } from "../components/baseComponents.js";
import google from "../assets/google.svg";
import appStore from "../assets/app_store.svg";
export const GetOurAppScreen = () => {
  const isMdDown = useMediaQuery((theme) => theme.breakpoints.down(1200));
  const isXsDown = useMediaQuery((theme) => theme.breakpoints.down(500));
  return (
    <Container
      style={{
        minHeight: "60vh",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        flexDirection: "column",
        textAlign: isMdDown ? "center" : "start",
      }}
    >
      <TitleBig>Ready to Breathe Better? Start Today!</TitleBig>
      <Text>
        Your breath is a powerful tool—use it to reduce stress, improve focus, and feel better every day. With guided
        breathing exercises, personalized recommendations, and progress tracking, our app helps you build a habit that
        supports your mind and body.
      </Text>
      <Box display={"flex"} flexDirection={"column"} justifyContent={"space-evenly"} alignItems={"center"}>
        <TitleH3>Available in</TitleH3>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={isXsDown ? "column" : "row"}
          alignItems={"center"}
          width={"110%"}
          height={isXsDown ? "120px" : "auto"}
        >
          <img alt={"breathe better in google play"} src={google} style={{ height: 50 }} />
          <img alt={"breathe better in app store"} src={appStore} style={{ height: 50 }} />
        </Box>
      </Box>
    </Container>
  );
};
