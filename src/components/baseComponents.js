import { styled } from "@mui/material";

export const Text = styled("p")(({ theme }) => ({
  fontWeight: 400,
  lineHeight: "40px",
  fontSize: 18,
  color: theme.palette.primary.main,
  [theme.breakpoints.down("md")]: {
    fontSize: 14,
    lineHeight: "20px",
  },
}));

export const TitleH3 = styled("h3")(({ theme }) => ({
  fontWeight: 500,
  fontSize: 24,
  color: theme.palette.primary.main,
  [theme.breakpoints.down("md")]: {
    fontSize: 20,
  },
}));

export const TitleH1 = styled("h1")(({ theme }) => ({
  fontWeight: 600,
  fontSize: 30,
  color: theme.palette.primary.main,
  [theme.breakpoints.down("md")]: {
    fontSize: 26,
  },
}));
