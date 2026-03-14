import React from 'react'


interface User {
  id : number;
  name : string;
}

interface Props{
  sortOrder : string;
}

const UserTable = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'})
    const users: User[] = await res.json();
    return (
      <>
        <p>{new Date().toLocaleTimeString()}</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
     </>
)
}    

export default UserTable