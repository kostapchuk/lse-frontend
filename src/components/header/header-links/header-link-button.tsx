import { Button } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface HeaderLinkButtonProps {
  route: string;
  Name: string;
}

const HeaderLinkButton: FC<HeaderLinkButtonProps> = ({ route, Name }) => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        onClick={() => navigate(route)}
        sx={{ my: 2, color: "white", display: "block" }}
      >
        {Name}
      </Button>
    </>
  );
};

export default HeaderLinkButton;
