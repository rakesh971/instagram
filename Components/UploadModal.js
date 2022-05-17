import React from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atom/modalAtom'
import Modal from 'react-modal';

const UploadModal = () => {
  const [Open,SetOpen] = useRecoilState(modalState)
  return (
    <div>
        {Open && (
          <Modal
            className="max-w-lg w-[90%] h-[300px] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md"
            isOpen={Open}
            onRequestClose={()=>SetOpen(false)}
          >
            <diiv className="flex flex=col justify-center items-center h-[100%]">
              <h1>Modal</h1>
            </diiv>
          </Modal>
        )}
    </div>
    
  );
}

export default UploadModal