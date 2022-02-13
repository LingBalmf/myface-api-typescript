import React from "react";
import { Post } from "./Post"; import "./PostList.scss";

export function PostList({ postList }) {
    return <ol className="post-container">
        {postList.map((post, index) => (
            <li className="post-info" key={index}>
                <Post  post={post} />
            </li>
        ))}
    </ol>
}