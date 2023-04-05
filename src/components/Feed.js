import React from 'react'
import './feed.css'
import { Avatar } from '@material-ui/core'

function Feed() {
  return (
    <div className='feed'>
        <div className="sidebar__top">
            <img src="" alt="" />
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

export default Feed