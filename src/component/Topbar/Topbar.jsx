import React from 'react';

import "./topbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Topbar = () => {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <div className="logo">Social Network</div>
            </div>
            <div className="topbarCenter">
                <div className="serchbar">
                    <SearchIcon className='searchIcon'></SearchIcon>
                   <input placeholder='sarch Field' type="text" className="sarchinput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <PersonIcon></PersonIcon>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <ChatIcon></ChatIcon>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <NotificationsNoneIcon></NotificationsNoneIcon>
                        <span className="topbarIconBadge">3</span>
                    </div>
                </div>
                <img src="/assets/img4.webp" alt="" className="topbarImg" />
            </div>
        </div>
    );
};

export default Topbar;