import { Box, Button, useMediaQuery } from "@mui/material";
import { Text, TitleH1, TitleH3 } from "./baseComponents.js";
import { Link } from "react-scroll";

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
          minWidth={"100%"}
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
            <Button style={{ marginTop: 0, color: "white" }}>
              <Link to="section2" smooth={true} duration={500}>
                Why breathing?
              </Link>
            </Button>
            <Button style={{ marginTop: 0, color: "white" }}>
              <Link to="section3" smooth={true} duration={500}>
                Our app
              </Link>
            </Button>
            <Button style={{ marginTop: 0, color: "white" }}>
              {" "}
              <Link to="section4" smooth={true} duration={500}>
                About us
              </Link>
            </Button>
          </Box>
          <Box display={"flex"} flexDirection={"column"} alignItems={"start"} justifyContent={"start"} color={"white"}>
            <TitleH3 sx={{ color: "white", marginBottom: 0 }}>Contacts:</TitleH3>
            <TitleH3 sx={{ color: "white", margin: 0 }}>Our email</TitleH3>
            <Text sx={{ color: "white", marginTop: 0 }}>breathe.better@contact.com</Text>
            <TitleH3 sx={{ color: "white", margin: 0 }}>Our phone</TitleH3>
            <Text sx={{ color: "white", marginTop: 0 }}>+49 (1525) 107 41 84</Text>
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
