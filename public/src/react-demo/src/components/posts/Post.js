import React from "react";

export function Post({ post }) {

    let likedByArray = [];
    let dislikedByArray = [];

    post.likedBy?.forEach(person => {
        likedByArray.push(<li key={person.id}>{person.name}</li>);
    });
    post.dislikedBy?.forEach(person => {
        dislikedByArray.push(<li key={person.id}>{person.name}</li>);
    });

    return <div>
        <h2>{post.message}</h2>
        <img src={post.imageUrl} alt={post.message} />
        {post.postedBy ? (
            <p>Posted by {post.postedBy.name} on {post.createdAt}</p>
        ) : <p>By Anonymous</p>}

        <p>{post.likedBy ? post.likedBy.length : '0'} 👍 {post.dislikedBy ? post.dislikedBy.length : '0'} 👎</p>
        {likedByArray.length ? (
            <>
                Liked by
                <ol>{likedByArray}</ol>
            </>
        ) : null}
    </div>
}