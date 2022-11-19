import { Button } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface HeaderLinkButtonProps {
  route: string;
  name: string;
}

const HeaderLinkButton: FC<HeaderLinkButtonProps> = ({ route, name }) => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate(route)}
      sx={{ my: 2, color: "white", display: "block" }}
    >
      {name}
    </Button>
  );
};

export default HeaderLinkButton;
