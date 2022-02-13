import React from "react";
import "./Post.scss";

export function Post({ post }) {

    return <div>

        <img className="post-image" src={post.imageUrl} alt={post.message} />
        <p>{post.message}</p>
        {post.postedBy ? (
            <p>Posted by {post.postedBy.name} on {post.createdAt}</p>
        ) : <p>By Anonymous</p>}

        <p>{post.likedBy ? post.likedBy.length : '0'} 👍 {post.dislikedBy ? post.dislikedBy.length : '0'} 👎</p>
        
    </div>
}