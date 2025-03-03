import { Box, Button, styled, useMediaQuery } from "@mui/material";
import { Text } from "../components/baseComponents.js";
import HomeScreenImage from "../assets/home_screen_image.svg";

const ContainerRow = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  alignItems: "center",
  minHeight: "100vh",
  maxWidth: "100%",
  padding: 0,
  marginLeft: "1em",
  marginRight: "1em",
  [theme.breakpoints.down(1200)]: {
    marginTop: "90px",
    textAlign: "center",
    justifyContent: "start",
    flexDirection: "column",
  },
}));

const BoxColumn = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "100%",
  maxWidth: theme.breakpoints.down(1200) ? "88%" : "55%",
  justifyContent: "center",
  alignItems: theme.breakpoints.down(1200) ? "center" : "start",
  flexDirection: "column",
}));

const BoxRow = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
}));

export const TitleBig = styled("h1")(({ theme }) => ({
  fontWeight: 560,
  lineHeight: "80px",
  fontSize: 44,
  color: theme.palette.primary.main,
  [theme.breakpoints.down(1200)]: {
    lineHeight: "40px",
    fontSize: 32,
  },
}));

export const HomeScreen = () => {
  const isMdDown = useMediaQuery((theme) => theme.breakpoints.down(1200));

  return (
    <ContainerRow>
      {isMdDown ? (
        <BoxColumn>
          <TitleBig>BreatheBetter: Easy Breathing Techniques for Everything</TitleBig>
          <img
            alt={"breathing exercises relax you"}
            src={HomeScreenImage}
            style={{ objectFit: "cover", minWidth: 400, height: 500 }}
          />
          <div>
            <Text>
              Feeling stressed before an exam? Overthinking everything? Your breath might be the secret weapon you’re
              missing! Our app can help you to use it in proper way!
            </Text>
          </div>
          <Button style={{ height: "70px", width: "284px", borderRadius: 15, fontSize: "18px" }} variant={"contained"}>
            BreatheBetter now!
          </Button>
        </BoxColumn>
      ) : (
        <>
          <BoxColumn>
            <TitleBig>BreatheBetter: Easy Breathing Techniques for Everything</TitleBig>
            <div style={{ width: "80%" }}>
              <Text>
                Feeling stressed before an exam? Overthinking everything? Your breath might be the secret weapon you’re
                missing! Our app can help you to use it in proper way!
              </Text>
            </div>
            <Button
              style={{ height: "70px", width: "284px", borderRadius: 15, fontSize: "20px" }}
              variant={"contained"}
            >
              BreatheBetter now!
            </Button>
          </BoxColumn>
          <img
            alt={"breathing exercises relax you"}
            src={HomeScreenImage}
            style={{ objectFit: "cover", minWidth: 600, height: 800 }}
          />
        </>
      )}
    </ContainerRow>
  );
};
