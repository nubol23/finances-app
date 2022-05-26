import React from "react";
import { AppBar, Container, CssBaseline, Toolbar } from "@mui/material";
import "./navbar.scss";
import ExtendedTitle from "./ExtendedTitle/Index";
import ExtendedMenu from "./ExtendedMenu/Index";
import UserComponent from "./UserComponent/Index";

const Navbar = () => {
  const pages = [
    { text: "Resumen", to: "/summary" },
    { text: "Detalle", to: "" },
    { text: "Registrar", to: "" },
  ];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <AppBar position="static">
        <CssBaseline />
        <Container maxWidth={false}>
          <Toolbar disableGutters>
            <ExtendedTitle />

            {/*<CompressedMenu*/}
            {/*  pages={pages}*/}
            {/*  anchorElNav={anchorElNav}*/}
            {/*  handleOpenNavMenu={handleOpenNavMenu}*/}
            {/*  handleCloseNavMenu={handleCloseNavMenu}*/}
            {/*/>*/}

            {/*<CompressedTitle />*/}

            <ExtendedMenu
              pages={pages}
              handleCloseNavMenu={handleCloseNavMenu}
            />

            <UserComponent />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
