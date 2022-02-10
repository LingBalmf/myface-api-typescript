import React, { useEffect, useState } from "react";
import { UserList } from "./UserList";
import { useSearchParams, Link } from 'react-router-dom';

export function UserListPage() {
    const [userList, setUserList] = useState();
    const [searchParams] = useSearchParams();
    const pageNumber =  Number(searchParams.get("page"));

    useEffect(
        function() {
            fetch(`http://localhost:3001/users?page=${pageNumber}`)
                .then(response => response.json())
                .then(userListJson => setUserList(userListJson.results));
        },
        [pageNumber]
    );

    return <main>
          <div>
             <Link to={`/users?page=${pageNumber - 1 }`}>Previous</Link> {      }
             <Link to={`/users?page=${pageNumber + 1}`}>Next</Link>
         </div>
        <h1>MyFace - Users</h1>
        { 
            userList !== undefined
                ? <UserList userList={userList} />
                : <p>Loading users...</p>
         }

    </main>
}