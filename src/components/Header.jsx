import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-scroll";

export const Header = () => {
  const isMdDown = useMediaQuery((theme) => theme.breakpoints.down(1200));
  const theme = useTheme();
  return (
    <header
      style={{
        position: "sticky",
        width: "100%",
        zIndex: 100,
        top: 0,
        right: 0,
        left: 0,
        backgroundColor: "rgba(255, 255, 255)",
        overflowX: "hidden",
        display: "flow-root",
        overflowClipMargin: "1rem",
      }}
    >
      {isMdDown ? (
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          marginX={"1em"}
          alignItems={"center"}
        >
          <h1 style={{ color: theme.palette.primary.main }}>BreatheBetter</h1>
          <Button>Try it now</Button>
        </Box>
      ) : (
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          marginX={"1em"}
          alignItems={"center"}
        >
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"50%"}
          >
            <h1 style={{ color: theme.palette.primary.main, cursor: "pointer" }}>
              <Link to="section1" smooth={true} duration={500}>
                BreatheBetter
              </Link>
            </h1>
            <Button>
              <Link to="section2" smooth={true} duration={500}>
                Why breathing?
              </Link>
            </Button>
            <Button>
              <Link to="section3" smooth={true} duration={500}>
                Our app
              </Link>
            </Button>
            <Button>
              {" "}
              <Link to="section4" smooth={true} duration={500}>
                About us
              </Link>
            </Button>
          </Box>
          <Button variant={"contained"} style={{ height: "47px", width: "150px", borderRadius: 15, fontSize: "17px" }}>
            Try it now
          </Button>
        </Box>
      )}
    </header>
  );
};
