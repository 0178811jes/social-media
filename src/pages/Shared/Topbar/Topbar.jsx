import React, { useContext } from 'react';

import "./topbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Topbar = () => {

    const {user, logout}= useContext(AuthContext);

    const handleLogout = () => {
        logout()
        .then(() => {})
        .catch(error=> console.error(error));
    }

    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <div className="logo">Social Network</div>
                
            </div>
            <Link to='/' className='btn btn-outline pe-5'><button>Home</button></Link>
            <Link to='/profile' className='btn btn-outline pe-5'><button>Profile</button></Link>
            <div className="topbarCenter">
                <div className="serchbar">
                    <SearchIcon className='searchIcon'></SearchIcon>
                   <input placeholder='sarch Field' type="text" className="sarchinput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    {user?.email && <span>Welcome, {user.email}</span>}
                    <Link className="btn" to="/login"><button>Login</button></Link>
                    {
                        user?.email?
                        <button onClick={handleLogout} className="btn ">Logout</button>
                        :<Link to='/login'>Log In</Link>
                    }
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