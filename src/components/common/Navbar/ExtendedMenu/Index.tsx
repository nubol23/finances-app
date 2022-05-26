import React from "react";
import { Box, Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

interface Props {
  pages: { text: string; to: string }[];
  handleCloseNavMenu: () => void;
}

const ExtendedMenu = ({ pages, handleCloseNavMenu }: Props) => {
  return (
    // <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
    <Box sx={{ flexGrow: 1, display: "flex" }}>
      {pages.map((page) => (
        <Button
          key={page.text}
          component={NavLink}
          to={page.to}
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          {page.text}
        </Button>
      ))}
    </Box>
  );
};

export default ExtendedMenu;
