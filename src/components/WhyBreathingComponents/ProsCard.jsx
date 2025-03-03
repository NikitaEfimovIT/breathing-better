import { Box, useMediaQuery } from "@mui/material";
import { Text, TitleH3 } from "../baseComponents.js";

export const ProsCard = (props) => {
  const { title, text, img } = props;
  const isMdDown = useMediaQuery((theme) => theme.breakpoints.down(1200));
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      flexDirection={"column"}
      width={"20.4375rem"}
      textAlign={isMdDown ? "center" : "start"}
    >
      <img src={img} alt={title} />
      <TitleH3>{title}</TitleH3>
      <Text>{text}</Text>
    </Box>
  );
};
