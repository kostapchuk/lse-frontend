import { Typography } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { FC } from "react";

const HeaderLogo: FC = () => {
  return (
    <>
      <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        LSE
      </Typography>
      <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
    </>
  );
};

export default HeaderLogo;
