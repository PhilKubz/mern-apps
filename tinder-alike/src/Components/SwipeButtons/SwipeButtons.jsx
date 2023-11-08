import React from 'react';
import "./SwipeButtons.css";
import ReplayIcon from '@mui/icons-material/Replay';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

function Swipebuttons() {
  const handleRepeatClick = () => {
    window.location.reload();
  };

  const handleSwipeLeft = () => {
    console.log("Removing: Person");
  };

  const handleSwipeRight = () => {
    console.log("Adding: Person");
  };

  return (
    <div className="swipeButtonsContainer">
      <div className="swipeButtons">
        <IconButton className="swipeButtonsClose" onClick={handleSwipeLeft}>
          <CloseIcon fontSize="large" />
        </IconButton>

        <IconButton className="swipeButtonsRepeat" onClick={handleRepeatClick}>
          <ReplayIcon fontSize="large" />
        </IconButton>

        <IconButton className="swipeButtonsHeart" onClick={handleSwipeRight}>
          <FavoriteIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  )
}

export default Swipebuttons;