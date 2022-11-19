import { Box } from "@mui/material";
import { RouteNames } from "../../../routes";
import HeaderLinkButton from "./header-link-button";

const HeaderUnAuth = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <HeaderLinkButton
          route={RouteNames.LOGIN}
          Name="Войти" />
        <HeaderLinkButton
          route={RouteNames.REGISTRATION}
          Name="Зарегистрироваться"
        />
      </Box>
    </>
  );
};

export default HeaderUnAuth;
