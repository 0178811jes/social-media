import React from 'react';
import "./Share.css";
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Share = () => {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className='shareProfileImg' src="/assets/img2.jfif" alt="" />
                    <input placeholder="what's in your mind?" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareButton">
                    <div className="shareOptions">
                        <div className="shareOption">
                        <PermMediaIcon htmlColor='tomato' className="shareIcon"></PermMediaIcon>
                            <span className='shareOptionText'>Photo or Vedio</span>
                        </div>
                        <div className="shareOption">
                        <LabelIcon htmlColor='blue' className="shareIcon"></LabelIcon>
                            <span className='shareOptionText'>Tag</span>
                        </div>
                        <div className="shareOption">
                        <RoomIcon htmlColor='green' className="shareIcon"></RoomIcon>
                            <span className='shareOptionText'>Location</span>
                        </div>
                        <div className="shareOption">
                        <EmojiEmotionsIcon htmlColor='goldenrod' className="shareIcon"></EmojiEmotionsIcon>
                            <span className='shareOptionText'>Fellings</span>
                        </div>
                    </div>
                    <button className="sharebutton">Share</button>
                </div>
            </div>
        </div>
    );
};

export default Share;