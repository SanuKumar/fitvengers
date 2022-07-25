import React from "react";
import { NavLink } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";
import { Height } from "@mui/icons-material";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
    >
      <NavLink to="/">
        <img
          alt=""
          src={Logo}
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </NavLink>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </NavLink>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;