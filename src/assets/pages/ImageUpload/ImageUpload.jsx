import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ImageUpload() {

    const [image, setImage] = useState('')
    const navigate = useNavigate()
    const handleChange = (e) => {
        console.log(e.target.files[0], "target")
        setImage(e.target.files[0])
    }
    const apiCall = async () => {
        try {
            const photoData = {
                id: Date.now().toString(),
                filename: image.name
            }
            const response = await axios.post("http://localhost:3000/photo", photoData)
            navigate("/imageList")
        } catch (error) {
            console.error('Error uploading files:', error)
        }
    }
    return (<>
        <div>ImageUpload
            <input type='file' onChange={handleChange} id="fileUpload" />
        </div>
        <button onClick={apiCall} className='border-red-500 border'> Submit </button>
    </>
    )
}

export default ImageUpload