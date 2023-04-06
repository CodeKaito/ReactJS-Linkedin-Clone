import React from 'react'
import './feed.css'
import { Avatar } from '@material-ui/core'

function Feed() {
  return (
    <div className='feed'>
        <div className="feed__top">
            <img src="https://media.licdn.com/dms/image/D4D16AQFBzmhe2-zgrw/profile-displaybackgroundimage-shrink_350_1400/0/1679331637969?e=1686182400&v=beta&t=qjDiGoqZeP8HU-0oNIxWb-4W_ZO0WkFEde4SZ2sCx74" alt="" />
            <Avatar className='feed__avatar' />
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
