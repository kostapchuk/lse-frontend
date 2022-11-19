import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { useAuth } from "../../redux/hooks/use-auth";
import HeaderLogo from "./header-logo";
import HeaderLinks from "./header-links/header-links";
import HeaderMenu from "./header-menu/header-menu";
import HeaderUnAuth from "./header-links/header-links-unauth";

const Header = () => {
  const { isAuth } = useAuth();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <HeaderLogo />
          {isAuth ? <HeaderLinks /> : <HeaderUnAuth />}
          {isAuth && <HeaderMenu />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
