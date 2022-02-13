import React from "react";
import { Link } from "react-router-dom";
import './NavBar.scss';

export function NavBar() {
    return (
    <nav className="navbar">
        <div className="links">
            <Link className="nav_first" to="/posts">MyFace</Link>
            <Link to="/users">Home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/users">Users</Link>
            <Link className="nav_last" to="/posts">+New Post</Link>  

        </div>
    </nav>
    )
}