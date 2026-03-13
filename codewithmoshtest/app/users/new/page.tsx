'use client';
import React from 'react';
import { useRouter } from "next/navigation";

const NewUserPage = () => {

    const router = useRouter();

  return (
    <button> 
    className='btn btn-primary bg-blue-700 text-white rounded-lg'
    onClick={() => router.push('/users')}> Create </button>
  )
}

export default NewUserPage