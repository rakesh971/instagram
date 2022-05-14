import Image from 'next/image'
import React from 'react'
import { SearchIcon,PlusCircleIcon } from "@heroicons/react/outline"
import { HomeIcon } from "@heroicons/react/solid"

const Header = () => {
  return (
    <div className='flex items-center justify-between max-w-6xl mx-4 xl:mx-auto'>
        <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid'>
            <Image
                src="https://cdn2.downdetector.com/static/uploads/logo/Instagram_Logo_Large.png"
                layout='fill'
                className='object-contain'
            />
        </div>
        <div className='cursor-pointer h-24 w-10 relative  lg:hidden'>
            <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
                layout='fill'
                className='object-contain'
            />
        </div>
        <div className='relative mt-1'>
            <div className='absolute top-2 left-2'>
                <SearchIcon className='h-5 text-gray-500'/>
            </div>
            <input type="text" placeholder='Search' className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md'/>
        </div>
       <div className='flex space-x-4 items-center'>
             <HomeIcon className= "hidden md:inline-flex  h-6 cursor-pointer hover:scale-125 transition-tranform duration-200 ease-out"/>
            <PlusCircleIcon
                className="h-6 cursor-pointer hover:scale-125 transition-tranform duration-200 ease-out"
            />
            <img src="https://new-img.patrika.com/upload/2022/03/27/ram-charan-next-target-mother-dream.jpg" alt ="user-image" className='h-10 w-10 rounded-full cursor-pointer object-cover'/>
       </div>
    </div>
  )
}

export default Header