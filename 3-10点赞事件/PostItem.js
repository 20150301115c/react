import React from "react";
import "./PostItem.css";
import like from "./images/favicon.ico";

function PostItem(props) {
    const handleClick = () => {
        props.onVote(props.post.id);
};
    const { post } = props;
    return (
        <li className='item'>
        <div className='title'>
            {post.title}
        </div>
        <div>
            创建人：<span>{post.author}</span>
        </div>
        <div>
            创建时间：<span>{post.date}</span>
        </div>
        <div className='like'>
            <span><img alt='vote' src={like} onClick={handleClick} /></span>&nbsp;&nbsp;&nbsp;
            {/* <button onClick={handleClick}>点赞</button> */}
            <span>{post.vote}</span>
            
        </div>
        
    </li>
    );
}
export default PostItem;
