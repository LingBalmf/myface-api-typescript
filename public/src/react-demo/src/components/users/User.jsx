import React from "react";
import { Link } from "react-router-dom";
import styles from "./User.module.scss";

export function User({ user }) {

    return <div>

        <img className={styles.postImage} src={user.profileImageUrl} alt={user.name} />
        <Link className={styles.link} to={`/users/${user.id}`}>
            <h2>{user.name}</h2> </Link>


    
    </div>
}
