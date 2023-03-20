import React from 'react'
import victor from "../../styles/images/v.png";
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const MiniNavbar = () => {
  return (
    <div className="mini__navbar">
         <img alt="" src={victor} height="100" style={{ marginTop: "-22px" }} />
         <IconButton style={{marginRight:"3%"}}>
          <MenuIcon />
        </IconButton>
    </div>
  )
}

export default MiniNavbar