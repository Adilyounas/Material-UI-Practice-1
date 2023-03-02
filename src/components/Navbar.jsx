import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PetsIcon from "@mui/icons-material/Pets";
import { InputBase } from "@mui/material";
import { Mail, Notifications } from "@mui/icons-material";
import img from "../assets/girl.jpg";

// *! creating components

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  justifyContent: "center",
  alignItems: "center",
  gap: "2vmax",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "2vmax",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar
      position="sticky"
   
    >
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          Navbar
        </Typography>
        <PetsIcon
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        />
        {/* //search */}
        <Search>
          <InputBase placeholder="search" />
        </Search>

        {/*?Icons */}

        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>

          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            sx={{
              width: "35px",
              height: "35px",
            }}
            src={img}
            onClick={() => setOpen(true)}
          />
        </Icons>

        {/* //Userbox */}

        <UserBox>
          <Avatar
            alt="Remy Sharp"
            sx={{
              width: "35px",
              height: "35px",
            }}
            src={img}
            onClick={() => setOpen(true)}
          />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>

      {/* //*! Menu section */}
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={() => setOpen(false)}>Profile</MenuItem>
        <MenuItem onClick={() => setOpen(false)}>My account</MenuItem>
        <MenuItem onClick={() => setOpen(false)}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
