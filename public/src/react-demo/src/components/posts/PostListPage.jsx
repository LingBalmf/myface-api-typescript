import React, { useEffect, useState } from "react";
import { PostList } from "./PostList";
import './PostListPage.scss';

export function PostListPage() {
    const [postList, setPostList] = useState();

    useEffect(
        function() {
            fetch(`http://localhost:3001/posts`)
                .then(response => response.json())
                 .then(postListJson => setPostList(postListJson.results));
        },
        []
    );

    return <main>
        <div className="heading" > MyFace - All Posts</div>
        {
            postList !== undefined
                ? <PostList postList={postList} />
                : <p>Loading posts...</p>
        }
    </main>
}