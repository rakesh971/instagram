import Image from 'next/image'
import React from 'react'
import { SearchIcon } from "@heroicons/react/outline"

const Header = () => {
  return (
    <div className='flex items-center justify-between max-w-6xl'>
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
        <h1>right side</h1>
    </div>
  )
}

export default Header