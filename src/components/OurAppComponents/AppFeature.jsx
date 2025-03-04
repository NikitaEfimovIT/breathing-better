import { Box, Button, useMediaQuery } from "@mui/material";
import { TitleH3, Text } from "../baseComponents.js";

export const AppFeature = (props) => {
  const { title, textPartOne, textPartTwo, buttonText, img, isInverse = false } = props;
  const isMdDown = useMediaQuery((theme) => theme.breakpoints.down(1200));
  return isMdDown ? (
    <Box
      display={"flex"}
      justifyContent={"space-evenly"}
      flexDirection={"column"}
      alignItems={"center"}
      width={"150%"}
      textAlign={"center"}
      marginY={"4em"}
    >
      <img alt={title} src={img} style={{ objectFit: "fill", minWidth: 150, maxHeight: 450 }} />
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} width={"50%"}>
        <TitleH3>{title}</TitleH3>
        <Text>{textPartOne}</Text>
        <Text>{textPartTwo}</Text>
        <Button variant={"contained"} fullWidth>
          {buttonText}
        </Button>
      </Box>
    </Box>
  ) : (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      flexDirection={isInverse ? "row-reverse" : "row"}
      width={"100%"}
    >
      <Box display={"flex"} justifyContent={"center"} alignItems={"start"} flexDirection={"column"} width={"50%"}>
        <TitleH3>{title}</TitleH3>
        <Text>{textPartOne}</Text>
        <Text>{textPartTwo}</Text>
        <Button variant={"contained"}>{buttonText}</Button>
      </Box>
      <img alt={title} src={img} style={{ objectFit: "cover", minWidth: 200, maxHeight: 650 }} />
    </Box>
  );
};
