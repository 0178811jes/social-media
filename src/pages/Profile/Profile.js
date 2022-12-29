import React from 'react';
import Feed from '../../component/Feed/Feed';
import Rightbar from '../../component/Rightbar/Rightbar';


const Profile = () => {
    return (
        <div>
            <h1>My Profile</h1>
            
            <Feed></Feed>
            <Rightbar></Rightbar>
        </div>
    );
};

export default Profile;