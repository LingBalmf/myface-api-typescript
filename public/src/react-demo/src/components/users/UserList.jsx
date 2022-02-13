import React from "react";
import { User } from "./User"; import "./UserList.scss";

export function UserList({ userList }) {
    return <ol className="post-container">
        {userList.map((user, index) => (
            <li className="post-info" key={index}>
                <User user={user} />
            </li>
        ))}
    </ol>
}