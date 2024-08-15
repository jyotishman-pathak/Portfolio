import Hero from '@/components/Hero'
import React from 'react'

const Home = () => {
  return (
   <main className='relative bg-black-100 
   flex flex-col justify-center items-center overflow-hidden
   mx-auto sm:px-10 px-5'>
    <div className="max-w-7xl w-full">
     <Hero/>
    </div>
   </main>
  )
}

export default Home
