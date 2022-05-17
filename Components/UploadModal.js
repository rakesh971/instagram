import React from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atom/modalAtom'
import Modal from 'react-modal';
import { CameraIcon } from '@heroicons/react/outline';
import { useRef } from 'react';
import { useState } from 'react';

const UploadModal = () => {
  const [Open,SetOpen] = useRecoilState(modalState);
  const filepickerRef = useRef(null)
  const [SelectedFile,SetSelectedFile]= useState(null)
  function addImageToPost(event){
    const reader = new FileReader()
    if(event.target.files[0]){
      reader.readAsDataURL(event.target.files[0])
    }
    reader.onload =(readerEvent)=>{
      SetSelectedFile(readerEvent.target.result)
    }
  }
  return (
    <div>
        {Open && (
          <Modal
            className="max-w-lg w-[90%]  p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md"
            isOpen={Open}
            onRequestClose={()=>{SetOpen(false);SetSelectedFile(null)}}
          >
            <diiv className="flex flex-col justify-center items-center h-[100%]">
              {SelectedFile ?(
                <img onClick={() => SetSelectedFile(null)} src={SelectedFile} className="w-full max-h-[250px] object-cover cursor-pointer"/>
              ) : (
                <CameraIcon onClick={()=>filepickerRef.current.click()} className='cursor-pointer h-14 bg-red-200 p-2 rounded-full border-2 text-red-500'/>
              )}
              
              <input type="file" className=" " hidden ref={filepickerRef} onChange={addImageToPost}/>
              <input type="text" className="m-4 border-none text-center w-full focus:ring-0" placeholder='Please enter your caption...' maxLength="150"/>
              <button disabled className="w-full bg-red-600 text-white p-2 shadow-md hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100">Upload  Post </button>
            </diiv>
          </Modal>
        )}
    </div>
    
  );
}

export default UploadModal