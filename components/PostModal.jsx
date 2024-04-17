"use client"

import PhotoUploadForm from "./PhotoUploadForm";
import Modal from "/components/Modal";
import {useState} from "react";
import Button from '@mui/material/Button';
import PostAddIcon from '@mui/icons-material/PostAdd';


export default function PostModal() {
  const [showModal, setShowModal] = useState(false);

  

  return (
      <div >

<div className="btn-post">
<Button onClick={() => setShowModal(true)} variant="contained" endIcon={<PostAddIcon/>}>
       Create
      </Button>
</div>
        
        {showModal &&
            <Modal onClose={() => setShowModal(false)}>
    
                <PhotoUploadForm/>
            </Modal>
            
        }
      </div>
  )
}