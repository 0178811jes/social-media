import React from 'react';
import Feed from '../../../component/Feed/Feed';
import Rightbar from '../../../component/Rightbar/Rightbar';
import Sidebar from '../../../component/Sidebar/Sidebar';
import Topbar from '../../../component/Topbar/Topbar';
import "./Profile.css";


const Profile = () => {
    return (
        <div>
            <Topbar></Topbar>
            <div className="profile">
                <Sidebar></Sidebar>
                <div className="profilRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        
                    <img className='profileCoverImg' src="/assets/img3.jpg" alt="" />
                    <img className='profileUserImg' src="/assets/img1.jpg" alt="" />
                    </div>
                    <div className="profileInfo">
                        <h4 className='profileInfoName'>Jesmin Ara</h4>
                        <span className='profileInfoDesc'>Hellow my friends</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    
                <Feed></Feed>
                <Rightbar profile></Rightbar>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;