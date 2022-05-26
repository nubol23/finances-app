import React from "react";
import { Box, Button } from "@mui/material";

interface Props {
  pages: string[];
  handleCloseNavMenu: () => void;
}

const ExtendedMenu = ({ pages, handleCloseNavMenu }: Props) => {
  return (
    // <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
    <Box sx={{ flexGrow: 1, display: "flex" }}>
      {pages.map((page) => (
        <Button
          key={page}
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          {page}
        </Button>
      ))}
    </Box>
  );
};

export default ExtendedMenu;
