import Head from 'next/head'
import React from 'react'

const signIn = () => {
  return (
    <>
      <Head>
        <title>Raw Fitness - Sign In</title>
    </Head>
      <div className='flex items-center justify-center bg-gray-200 h-screen'>
        <div className='rounded-lg w-1/2 h-1/2 bg-gray-100 flex flex-col space-y-10 items-center justify-center'>
          <h1 className='font-extrabold text-3xl tracking-wider hover:text-gradient'>Sign in</h1>
           <input placeholder='Enter your email' type='email' size={40} className='shadow-sm p-4 border-2 border-gray-400 rounded-lg'/>
           <input placeholder='password here' type='password' size={40} className='shadow-sm p-4 border-2 border-gray-400 rounded-lg'/>
           <button className='btn-main px-10 py-4'>Sign In</button>
        </div>
    </div>
    </>
  )
}

export default signIn