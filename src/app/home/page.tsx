"use client"
import React from 'react'
import Sidebar from '../components/sidebar'
import NavBar from '../components/navbar'

function Home() {
  return (
    <main>
      <div className='lg:flex'>
      <div className='lg:w-[18rem]'>
        <Sidebar />
      </div>
      <div className='w-full'>
        <NavBar heading='Organization 1'/>
      </div>
      </div>
    </main>
  )
}

export default Home