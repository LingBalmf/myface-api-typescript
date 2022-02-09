import React from "react";
import { User } from "./User";

export function UserList({ userList }) {
    return <ol>
        {userList.map((user, index) => (
            <li key={index}>
                <User user={user} />
            </li>
        ))}
    </ol>
}