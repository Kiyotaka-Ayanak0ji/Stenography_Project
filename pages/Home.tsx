import React from 'react'
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className='flex flex-col gap-2 h-full w-full items-center justify-center'>
        <div className='h-20 w-full justify-center'>
            <Navbar/>
        </div>
        <div className='w-full text-center justify-center items-center'>
            <p className='text-neutral-800 text-4xl'>
                Stenography Online
            </p>
        </div>
    </div>
  )
}

export default Home