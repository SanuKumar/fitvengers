import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212", xs: "70px" }, ml: { sx: "50" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography fontWeight="700">
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography>checkout the most effective exercises</Typography>
    </Box>
  );
};

export default HeroBanner;
