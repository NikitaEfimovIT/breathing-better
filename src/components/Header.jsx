import { Box, Button, Container, SvgIcon, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
export const Header = () => {
  const isMdDown = useMediaQuery((theme) => theme.breakpoints.down(1200));
  const theme = useTheme();
  return (
    <header
      style={{
        position: "fixed",
        width: "100%",
        zIndex: 100,
        top: 0,
        right: 0,
        left: 0,
        backgroundColor: "rgba(255, 255, 255)",
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
            <h1 style={{ color: theme.palette.primary.main }}>BreatheBetter</h1>
            <Button>Why breathing?</Button>
            <Button>Our app</Button>
            <Button>About us</Button>
          </Box>
          <Button variant={"contained"} style={{ height: "47px", width: "150px", borderRadius: 15, fontSize: "17px" }}>
            Try it now
          </Button>
        </Box>
      )}
    </header>
  );
};
