import React from 'react';
import "./Rightbar.css";

const Rightbar = () => {
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className='birthdayImg' src="/assets/gift png.jfif" alt="" />
                    <span className="birthdayText">
                    <b>Pola foster</b> and <b>3 other friend</b> have a birthday today </span>
                </div>
            </div>
        </div>
    );
};

export default Rightbar;