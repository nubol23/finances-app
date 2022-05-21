import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#4F7CAC",
    },
    secondary: {
      main: "#9EEFE5",
      contrastText: "#3C474B",
    },
    error: {
      main: "#FF495C",
    },
    warning: {
      main: "#F8E16C",
    },
    // background: {
    //   default: "#303030",
    //   paper: "#424242",
    // },
  },
});
