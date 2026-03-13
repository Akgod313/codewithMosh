import React from 'react'
import UserTable from './UserTable'
import Link from "next/link"


const UsersPage = async () => {
  
  return (
    <>
     <h1>Users</h1>
     <Link href="/users/new" className='btn bg-slate-400'>New User</Link>
     <UserTable />
    </>
  )
}

export default UsersPage
