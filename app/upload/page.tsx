'use client'
import React, {useState} from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary'

interface ICloudinaryResult {
    public_id: string;
}

export default function UploadPage() {

    const [publickId, setPblickId] = useState('');

  return (
    <>
        {publickId && <CldImage src={publickId} width={270} height={180} alt='image' />}

        <CldUploadWidget uploadPreset='ghuanbbk'
            onUpload={(result) => {
                if(result.event !== 'success') return;
                const info = result.info as ICloudinaryResult;
                setPblickId(info.public_id)
            }}>
                
            {({open}) => 
                <button onClick={() => open()}>
                    Upload
                </button>
            }
        </CldUploadWidget>
    </>
  )
}
