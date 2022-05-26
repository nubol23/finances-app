import React from "react";
import { Typography } from "@mui/material";

const CompressedTitle = () => {
  return (
    <Typography
      variant="h5"
      noWrap
      component="a"
      href="/home"
      sx={{
        mr: 2,
        display: { xs: "flex", md: "none" },
        flexGrow: 1,
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

export default CompressedTitle;
