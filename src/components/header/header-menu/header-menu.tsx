import {
  Box,
  Tooltip,
  IconButton,
  Typography,
  Avatar,
  Menu,
  MenuList,
  MenuItem,
  Button,
} from "@mui/material";
import React, { FC } from "react";
import { logOut } from "../../../redux/slices/state/authSlice";
import { useAuth } from "../../../redux/hooks/use-auth";
import { useAppDispatch } from "../../../redux/hooks/redux-hooks";

const HeaderMenu: FC = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const { userType } = useAuth();

  const dispatch = useAppDispatch();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open menu">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Typography variant="h5" noWrap sx={{ mr: 2 }}>
            {userType}
          </Typography>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
        <MenuList>
          <MenuItem style={{ display: "block" }} onClick={handleCloseUserMenu}>
            <Button
              onClick={() => dispatch(logOut())}
              style={{ color: "black", backgroundColor: "none" }}
            >
              Выйти
            </Button>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default HeaderMenu;
