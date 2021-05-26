import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  spacing: 4,
  palette: {
    primary: {
      light: "#ffca28",
      main: "#ffb300",
      dark: "#ffb300",
      contrastText: "#fff",
    },
    secondary: {
      light: "#009688",
      main: "#00897b",
      dark: "#00796b",
      contrastText: "#fff",
    },
    default: {
      main: "#fff",
      contrastText: "#000",
    },
  },
});

export default theme;
