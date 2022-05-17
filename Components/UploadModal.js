import React from 'react'
import { Snapshot, useRecoilState } from 'recoil'
import { modalState } from '../atom/modalAtom'
import Modal from 'react-modal';
import { CameraIcon } from '@heroicons/react/outline';
import { useRef } from 'react';
import { useState } from 'react';
import {addDoc,collection,doc,serverTimestamp, updateDoc} from "firebase/firestore";
import { db, storage } from "../firebase";
import { useSession } from 'next-auth/react';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';

const UploadModal = () => {
  const [Open,SetOpen] = useRecoilState(modalState);
  const [SelectedFile,SetSelectedFile]= useState(null)
  const [Loading,SetLoading] = useState(false);
  const { data: session } = useSession();

  async function uploadPost(){
    if(Loading) return;

    SetLoading(true)

     const docRef = await addDoc(collection(db, "posts"), {
      caption: captionRef.current.value,
      username:session.user.username,
      profileImg: session.user.image,
      timestamp: serverTimestamp(),
    });

    const imageRef = ref(storage,`posts/${docRef.id}/image`)
    await uploadString(imageRef,SelectedFile,"data_url").then(
      async(Snapshot)=>{
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db,'posts',docRef.id),{
          image:downloadURL,
        })
      }
      );
      SetOpen(false);
      SetLoading(false);
      SetSelectedFile(null);
  }

  const filepickerRef = useRef(null);
  const captionRef = useRef(null);

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
              <input type="text" ref = {captionRef} className="m-4 border-none text-center w-full focus:ring-0" placeholder='Please enter your caption...' maxLength="150"/>
              <button 
              disabled = {!SelectedFile || Loading}
              onClick= {uploadPost}
              className="w-full bg-red-600 text-white p-2 shadow-md hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100">Upload  Post </button>
            </diiv>
          </Modal>
        )}
    </div>
    
  );
}

export default UploadModal