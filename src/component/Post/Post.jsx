import React, { useState } from 'react';
import "./Post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from "../../FackData";

const Post = ({post}) => {

    const[like, setLike] = useState(post.like);
    const[isLike, setIsLike] = useState(false);

    const likeHandler = ()=>{
        setLike(isLike? like-1 : like +1)
        setIsLike(!isLike)
    }
    
    return (
        <div className="post">
            <div className="postwrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" 
                        src={Users.filter((u) =>u.id === post?.userId)[0].profilePicture}
                        alt="" />
                        <span className="postUserName">
                        {Users.filter((u) =>u.id === post?.userId)[0].username}
                        </span>
                        <span className="postDate">{post?.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon></MoreVertIcon>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className='postImg' src={post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' onClick={likeHandler} src="/assets/like png.png" alt="" />
                        <img className='likeIcon' onClick={likeHandler} src="/assets/heart png.png" alt="" />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;