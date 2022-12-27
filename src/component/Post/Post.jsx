import React from 'react';
import "./Post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Post = () => {
    return (
        <div className="post">
            <div className="postwrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src="/assets/img1.jpg" alt="" />
                        <span className="postUserName">Sifat togor</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon></MoreVertIcon>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">My fast post</span>
                    <img className='postImg' src="/assets/img7.jfif" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src="/assets/like png.png" alt="" />
                        <img className='likeIcon' src="/assets/heart png.png" alt="" />
                        <span className="postLikeCounter">32 people</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;