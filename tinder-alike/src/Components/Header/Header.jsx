import React from 'react'
import './Header.css'

import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import fireLogo from '../../Assets/firelogo.png';

function Header() {
  return (
    <div className='header'>
        <IconButton>
          <PersonIcon fontSize="large" className="headerIcon"/>
        </IconButton>

        <img src={fireLogo} className="headerLogo" alt="Fire Logo"/>

        <IconButton>
          <ForumIcon fontSize="large" className="headerIcon"/>
        </IconButton>
    </div>
  )
}

export default Header