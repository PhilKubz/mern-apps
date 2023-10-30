import React from 'react'
import "./SwipeButtons.css";
import ReplayIcon from '@mui/icons-material/Replay';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';




function Swipebuttons() {
  return (
    <div className="swipeButtons">

        <IconButton className="swipeButtonsClose">
            <CloseIcon fontSize="large" />
        </IconButton>

        <IconButton className="swipeButtonsRepeat">
            <ReplayIcon fontSize="large" />
        </IconButton>

        <IconButton className="swipeButtonsHeart">
            <FavoriteIcon fontSize="large" />
        </IconButton>

    </div>
  )
}

export default Swipebuttons