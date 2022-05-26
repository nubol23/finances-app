import React from "react";
import { Typography } from "@mui/material";

const ExtendedTitle = () => {
  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="/"
      className="extended-title"
      sx={{
        mr: 2, // Margin right
        // display: { xs: "none", md: "flex" },
        display: "flex",
        fontFamily: "monospace",
        fontWeight: 700,
        // letterSpacing: ".3rem",
        color: "inherit",
        textDecoration: "none",
      }}
    >
      Econ App
    </Typography>
  );
};

export default ExtendedTitle;
