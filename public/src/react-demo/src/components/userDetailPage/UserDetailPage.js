import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { PostList } from "../posts/PostList";
import { User } from "../users/User";

export function UserDetailPage() {
    const [user, setUser] = useState();
    const userId = useParams().userId;

    useEffect(
        function () {
            if (userId) {
                fetch(`http://localhost:3001/users/${userId}`)
                    .then(response => response.json())
                    .then(userJson => setUser(userJson))
            }
        },
        [userId]
    );

    let userPageContent;

    console.log({ user });

    if (user !== undefined) {
        userPageContent = <>
            <User user={user} />
            <h2> {user.name}'s Post </h2>
            <PostList postList={user.posts} />
        </>
    } else {
        userPageContent = <p> Loading user details...</p>
    }

    return <main>
        <h1> MyFace - User Details </h1>
        {userPageContent}
    </main>
}