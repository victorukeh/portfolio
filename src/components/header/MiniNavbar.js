import React from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../styles/css/header.css"

const MiniNavbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="mini__navbar">
      <LazyLoadImage
        src="https://drive.google.com/uc?export=view&id=1fwGjDgOaE4Nn3yBNL2cAQz5W-bRBj8Hv"
        height={100}
        style={{ marginTop: "-22px" }}
        alt="Me"
      />

      <IconButton
        style={{ marginRight: "3%" }}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}><a href="#home" className="mini__navbar__links">Home</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="#about" className="mini__navbar__links">About</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="#educate" className="mini__navbar__links">Education</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="#exp" className="mini__navbar__links">Experience</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="#projects" className="mini__navbar__links">Projects</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="#contact" className="mini__navbar__links">Contact</a></MenuItem>
      </Menu>
    </div>
  );
};

export default MiniNavbar;
