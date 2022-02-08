import React from "react";


export function Post({ post }) {

    let likedByArray = [];
    let dislikedByArray=[];

    post.likedBy.forEach(person => {
        likedByArray.push(<li>{person.name}</li>);
    });
    post.dislikedBy.forEach(person => {
        dislikedByArray.push(<li>{person.name}</li>);
    });

    console.log(likedByArray);

    return <div>
        <h2>{post.message}</h2>
        <img src={post.imageUrl} alt={post.message} />
        <p>Posted by {post.postedBy.name} on {post.createdAt}</p>
        <p>{post.likedBy.length} 👍 {post.dislikedBy.length} 👎</p>
        <ol>Liked by {likedByArray}</ol>
    </div>
}