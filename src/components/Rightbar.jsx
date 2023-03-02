import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import React from "react";
import Lists from "./List";
const Rightbar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      <Box
        position={"sticky"}
        // top={0}
        sx={{
          padding: "16px 0",
        }}
      >
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            padding: "16px 0",
          }}
        >
          <AvatarGroup max={4}>
            <Avatar
              alt="Remy Sharp"
              src="https://cdn.pixabay.com/photo/2019/05/04/15/24/woman-4178302_960_720.jpg"
            />
            <Avatar
              alt="Travis Howard"
              src="https://cdn.pixabay.com/photo/2016/11/29/06/08/woman-1867715_960_720.jpg"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://cdn.pixabay.com/photo/2021/05/23/00/21/woman-6274879_960_720.png"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://cdn.pixabay.com/photo/2014/09/17/20/03/profile-449912_960_720.jpg"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://cdn.pixabay.com/photo/2014/09/17/20/03/profile-449912_960_720.jpg"
            />{" "}
            <Avatar
              alt="Agnes Walker"
              src="https://cdn.pixabay.com/photo/2014/09/17/20/03/profile-449912_960_720.jpg"
            />
          </AvatarGroup>
        </Box>

        <Typography variant="h6" fontWeight={100}>
          <Lists />
        </Typography>
      </Box>
    </Box>
  );
};

export default Rightbar;
