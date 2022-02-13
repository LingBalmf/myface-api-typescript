import React, { useEffect, useState } from "react";
import { UserList } from "./UserList";
import './UserListPage.scss';

export function UserListPage()  {

        const [userList, setUserList] = useState();
 
        useEffect(
            function() {
                fetch(`http://localhost:3001/users`)
                    .then(response => response.json())
                     .then(userListJson => setUserList(userListJson.results));
            },
            []
        );


return <main>
<div className="heading" > MyFace - All Users</div>
{
    userList !== undefined
        ? <UserList userList={userList} />
        : <p>Loading users...</p>
}
</main>
}