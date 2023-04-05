import React from 'react'

import { Avatar } from '@material-ui/core'

import './sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg" alt="" />
            <Avatar className='sidebar__avatar' />
            <h2>Jerome Decinco</h2>
            <h4>OOP | Fullstack Developer | Software Engineer | System Engineer | ITS <br />
                Support Specialist</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar_statNumber">2,543</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar_statNumber">2,448</p>
            </div>
        </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
        </div>
    </div>
  )
}

export default Sidebar
