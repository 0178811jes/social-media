import React from 'react';
import './Home.css'
// import Topbar from '../Shared/Topbar/Topbar';
import Sidebar from '../../component/Sidebar/Sidebar';
import Feed from '../../component/Feed/Feed';
import Rightbar from '../../component/Rightbar/Rightbar';


const Home = () => {
    return (
        <div>
            {/* <Topbar></Topbar> */}
            <div className="homeContainer">
            <Sidebar></Sidebar>
            <Feed></Feed>
            <Rightbar></Rightbar>
            </div>
        </div>
    );
};

export default Home;