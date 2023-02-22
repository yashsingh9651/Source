import React from 'react';
import {SiSourceengine} from 'react-icons/si'

export const Navbar = () => {
  return (
    <>
    <nav className='border-black border-b '>
        <nav className='m-auto h-14 md:h-20 flex items-center justify-between'>
            <div className='mx-3 text-2xl md:text-4xl font-bold font-[Phudu] flex items-center gap-1'><SiSourceengine/>Source</div>
        </nav>
    </nav>
    </>
  )
}
