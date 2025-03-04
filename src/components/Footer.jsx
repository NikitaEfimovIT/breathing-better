import { Box, Button, useMediaQuery } from "@mui/material";
import { Text, TitleH1 } from "./baseComponents.js";

export const Footer = () => {
  const isMdDown = useMediaQuery((theme) => theme.breakpoints.down(1200));
  const isXsDown = useMediaQuery((theme) => theme.breakpoints.down(500));
  return (
    <footer
      style={{
        backgroundColor: "#1A4962",
        minHeight: 200,
        color: "white",
        position: "static",
        overflowX: "hidden",
        display: "flow-root",
        overflowClipMargin: "1rem",
      }}
    >
      <Box padding={"3em"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={isXsDown ? "column" : "row"}
          alignItems={"start"}
          width={"100%"}
        >
          <Box
            display={"flex"}
            flexDirection={isMdDown ? "column" : "row"}
            width={"60%"}
            justifyContent={"space-between"}
            alignItems={"start"}
          >
            <Box display={"flex"} flexDirection={"column"} alignItems={"start"} justifyContent={"start"}>
              <TitleH1 style={{ margin: 0, color: "white" }}>BreathBetter</TitleH1>
              {!isMdDown && (
                <Text style={{ margin: 0, lineHeight: "normal", fontSize: 14, color: "white" }}>
                  {`@BreathBetter ${new Date().getFullYear()}.`}
                  <br /> All rights reserved.
                </Text>
              )}
            </Box>
            <Button style={{ marginTop: 0, color: "white" }}>Why breathing?</Button>
            <Button style={{ marginTop: 0, color: "white" }}>Our app</Button>
            <Button style={{ marginTop: 0, color: "white" }}>Get an app</Button>
          </Box>
          <Box display={"flex"} flexDirection={"column"} alignItems={"start"} justifyContent={"start"}>
            <Button variant={"contained"} style={{ height: "40px", fontSize: "17px", borderRadius: 15 }}>
              Try it now!
            </Button>
            {isMdDown && (
              <Text style={{ margin: 0, lineHeight: "normal", fontSize: 14, color: "white" }}>
                {`@BreathBetter ${new Date().getFullYear()}.`}
                <br /> All rights reserved.
              </Text>
            )}
          </Box>
        </Box>
      </Box>
    </footer>
  );
};
