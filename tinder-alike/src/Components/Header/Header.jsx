import React from 'react'
import './Header.css'

import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import fireLogo from '../../Assets/firelogo.png';

function Header() {
  return (
    <div className='header'>
        <IconButton>
          <PersonIcon fontSize="large" className="headerIcon"/>
        </IconButton>
        <img src={fireLogo} className="headerLogo" style={{ objectFit: 'contain', height: '40px' }} alt="Fire Logo" />
    </div>
  )
}

export default Header