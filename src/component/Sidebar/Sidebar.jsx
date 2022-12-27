import React from 'react';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sighbarwraper">
                <ul className="sidebarlist">
                    <li className="sidebarlistItem">
                        <RssFeedIcon className="sidebarIcon"></RssFeedIcon>
                        <span className="sidebarItemText">Feed</span>
                    </li>
                    <li className="sidebarlistItem">
                        <ChatIcon className="sidebarIcon"></ChatIcon>
                        <span className="sidebarItemText">Chats</span>
                    </li>
                    <li className="sidebarlistItem">
                        <PlayCircleIcon className="sidebarIcon"></PlayCircleIcon>
                        <span className="sidebarItemText">Videos</span>
                    </li>
                    <li className="sidebarlistItem">
                        <GroupIcon className="sidebarIcon"></GroupIcon>
                        <span className="sidebarItemText">Groups</span>
                    </li>
                    <li className="sidebarlistItem">
                        <BookmarkIcon className="sidebarIcon"></BookmarkIcon>
                        <span className="sidebarItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarlistItem">
                        <QuestionMarkIcon className="sidebarIcon"></QuestionMarkIcon>
                        <span className="sidebarItemText">Questions</span>
                    </li>
                    <li className="sidebarlistItem">
                        <WorkOutlineIcon className="sidebarIcon"></WorkOutlineIcon>
                        <span className="sidebarItemText">Jobs</span>
                    </li>
                    <li className="sidebarlistItem">
                        <EventIcon className="sidebarIcon"></EventIcon>
                        <span className="sidebarItemText">Events</span>
                    </li>
                    <li className="sidebarlistItem">
                         <AccountBalanceIcon className="sidebarIcon"></AccountBalanceIcon>
                        <span className="sidebarItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarbutton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/img1.jpg" alt="" />
                        <span className="sidebarFriendName">Jhon Doe</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;