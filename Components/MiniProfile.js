import React from 'react'

const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
    <img
      className="h-16 w-16 rounded-full border p-[2px] object-cover"
      src="https://new-img.patrika.com/upload/2022/03/27/ram-charan-next-target-mother-dream.jpg"
      alt="user-image"
    />
    <div className="flex-1 ml-4">
      <h2 className="font-bold">Rakesh</h2>
      <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
    </div>
    <button className="font-semibold text-blue-400 text-sm">
      Sign out
    </button>
  </div>
  )
}

export default MiniProfile