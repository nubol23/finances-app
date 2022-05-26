import React from "react";
import { AppBar, Container, CssBaseline, Toolbar } from "@mui/material";
import "./navbar.scss";
import ExtendedTitle from "./ExtendedTitle/Index";
import CompressedMenu from "./CompressedMenu/Index";
import CompressedTitle from "./CompressedTitle/Index";
import ExtendedMenu from "./ExtendedMenu/Index";
import UserComponent from "./UserComponent/Index";

const pages = ["Resumen", "Detalle", "Registrar"];
const actions = ["Mi cuenta", "Cerrar sesión"];

const Navbar = () => {
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

            <UserComponent actions={actions} />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
