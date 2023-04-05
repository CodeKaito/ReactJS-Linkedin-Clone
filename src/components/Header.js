import React from 'react'
import './header.css'

import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';

import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import NotificationIcon from '@material-ui/icons/Notifications'
import ChatIcon from '@material-ui/icons/Chat'

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="" />

        <div className="header__search">
            <SearchIcon />
            <input type="text" placeholder='Search'/>
        </div>
      </div>
      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={NotificationIcon} title='Notifications' />
        <HeaderOption avatar='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600'
            title='Me' />
      </div>
    </div>
  )
}

export default Header
