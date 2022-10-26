import { createTheme } from "@mui/material/styles";

export const Colors = {
  primary: "#ffffff",
  secondary: "#3a3a3a",
  tertiary: "#9900cc",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    tertiary: {
      main: Colors.tertiary,
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
  },
});

export default theme;
