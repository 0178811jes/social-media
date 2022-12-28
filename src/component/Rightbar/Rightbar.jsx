import React from 'react';
import "./Rightbar.css";
import {Users} from "../../FackData";
import Online from '../Online/Online';

const Rightbar = ({profile}) => {


    const HomeRightbar =()=>{
        return (
            <div>
                <div className="birthdayContainer">
                    <img className='birthdayImg' src="/assets/gift png.jfif" alt="" />
                    <span className="birthdayText">
                    <b>Pola foster</b> and <b>3 other friend</b> have a birthday today </span>
                </div>
                <img src="/assets/ad.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u=>(
                        <Online key={u.id} user={u}></Online>
                    ))}
                    
                </ul>
            </div>
        )
    }

    const ProfileRightbar =()=>{
        return(
            <>
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City: </span>
                        <span className="rightbarInfoValue">New York</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:: </span>
                        <span className="rightbarInfoValue">Madrid</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User Friends</h4>
                <div className="rightbarFolowings">
                    <div className="rightbarFolwing">
                        <img src="/assets/img4.webp" alt="" className="rightbarFolowingImg" />
                        <span className="rightbarFolowingName">John Carter</span>
                    </div>
                    <div className="rightbarFolwing">
                        <img src="/assets/img2.jfif" alt="" className="rightbarFolowingImg" />
                        <span className="rightbarFolowingName">John Carter</span>
                    </div>
                    <div className="rightbarFolwing">
                        <img src="/assets/img3.jpg" alt="" className="rightbarFolowingImg" />
                        <span className="rightbarFolowingName">John Carter</span>
                    </div>
                    <div className="rightbarFolwing">
                        <img src="/assets/img4.webp" alt="" className="rightbarFolowingImg" />
                        <span className="rightbarFolowingName">John Carter</span>
                    </div>
                    <div className="rightbarFolwing">
                        <img src="/assets/img10.webp" alt="" className="rightbarFolowingImg" />
                        <span className="rightbarFolowingName">John Carter</span>
                    </div>
                    <div className="rightbarFolwing">
                        <img src="/assets/img9.jfif" alt="" className="rightbarFolowingImg" />
                        <span className="rightbarFolowingName">John Carter</span>
                    </div>
                    <div className="rightbarFolwing">
                        <img src="/assets/img7.jfif" alt="" className="rightbarFolowingImg" />
                        <span className="rightbarFolowingName">John Carter</span>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                
                <ProfileRightbar></ProfileRightbar>
            </div>
        </div>
    );
};

export default Rightbar;