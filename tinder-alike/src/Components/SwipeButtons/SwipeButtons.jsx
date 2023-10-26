import React from 'react'
import "./SwipeButtons.css";
import ReplayIcon from '@mui/icons-material/Replay';
import WestIcon from '@mui/icons-material/West';
import StarRateIcon from '@mui/icons-material/StarRate';
import EastIcon from '@mui/icons-material/East';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';




function Swipebuttons() {
  return (
    <div className="swipeButtons">
        <IconButton className="swipeButtonsRepeat">
            <ReplayIcon fontSize="large" />
        </IconButton>

        <IconButton className="swipeButtonsLeft">
            <WestIcon fontSize="large" />
        </IconButton>

        <IconButton className="swipeButtonsStar">
            <StarRateIcon fontSize="large" />
        </IconButton>

        <IconButton className="swipeButtonsRight">
            <EastIcon fontSize="large" />
        </IconButton>

        <IconButton className="swipeButtonsLightning">
            <FlashOnIcon fontSize="large" />
        </IconButton>
    </div>
  )
}

export default Swipebuttons