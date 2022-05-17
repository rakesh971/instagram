import React from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atom/modalAtom'

const UploadModal = () => {
  const [Open,SetOpen] = useRecoilState(modalState)
  return (
    <div>
        <h1>UploadModal</h1>
        {Open && <h1>The modal is Open</h1>}
    </div>
    
  );
}

export default UploadModal