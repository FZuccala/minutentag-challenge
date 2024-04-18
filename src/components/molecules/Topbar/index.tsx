import React from "react";
import { AppBar, Toolbar, IconButton, Avatar } from "@mui/material";
import { RiMenu2Fill } from "react-icons/ri";
interface TopbarProps {
  avatarSrc: string;
}

const Topbar: React.FC<TopbarProps> = ({ avatarSrc }) => (
  <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" color="primary" aria-label="menu">
        <RiMenu2Fill />
      </IconButton>
      <Avatar
        alt="User Avatar"
        src={avatarSrc}
        style={{ marginLeft: "auto" }}
      />
    </Toolbar>
  </AppBar>
);

export default Topbar;
