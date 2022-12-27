import React from 'react';
import "./Rightbar.css";
import {Users} from "../../FackData";
import Online from '../Online/Online';

const Rightbar = () => {
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
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
        </div>
    );
};

export default Rightbar;