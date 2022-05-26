import React from "react";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../../store/slices/authSlice";

const UserComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const session = useSelector((state: RootState) => state.auth.value);

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Opciones de cuenta">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar>{session.name!.at(0)}</Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography textAlign="center">Mi cuenta</Typography>
        </MenuItem>

        <MenuItem
          onClick={() => {
            dispatch(logout());
            handleCloseUserMenu();
            navigate("/login");
          }}
        >
          <Typography textAlign="center">Cerrar sesión</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default UserComponent;
