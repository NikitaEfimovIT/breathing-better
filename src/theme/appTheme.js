import { createTheme } from "@mui/material";

export const appTheme = createTheme({
  palette: {
    primary: {
      main: "#1A4962",
      light: "#fff",
    },
    secondary: {
      main: "#8CC5E3",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            backgroundColor: "#8CC5E3",
            color: "#fff",
            borderRadius: 15,
            fontSize: 20,
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
              backgroundColor: "#1A4962",
            },
          },
        },
      ],
    },
  },
});
