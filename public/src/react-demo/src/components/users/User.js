import React from "react";
import { Link } from "react-router-dom";


export function User({ user }) {


    return <div>
        <Link to={`/users/${user.id}`}>
        <h2>{user.name}</h2>
        <img src={user.profileImageUrl} alt={user.name} />
        </Link>
        <ul>
        <li>User ID: {user.id}</li>
        <li>Username: {user.username}</li>
        <li>Email: {user.email}</li>
        </ul>
    </div>
}