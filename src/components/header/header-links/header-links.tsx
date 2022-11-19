import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../redux/hooks/use-auth";
import { RouteNames } from "../../../routes";
import HeaderLinkButton from "./header-link-button";

const HeaderLinks = () => {
  const { isRoleTeacher } = useAuth();

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      <HeaderLinkButton route={RouteNames.STUDY} name="Главная" />
      {isRoleTeacher && (
        <HeaderLinkButton route={RouteNames.RESULTS} name="Результаты" />
      )}
      {isRoleTeacher && (
        <HeaderLinkButton route={RouteNames.CREATE_QUIZ} name="Новый тест" />
      )}
      <HeaderLinkButton
        route={RouteNames.RESULTS_CURRENT_USER}
        name="Мои результаты"
      />
    </Box>
  );
};

export default HeaderLinks;
