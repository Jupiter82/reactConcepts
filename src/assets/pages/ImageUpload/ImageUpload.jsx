import React, { useState } from 'react'

function ImageUpload() {

    const [image, setImage] = useState('')

    const handleChange = (e) => {
        console.log(e.target.files, "target")
        setImage(e.target.files[0])
    }
    return (<>
        <div>ImageUpload
            <input type='file' value={image} onChange={handleChange} />
        </div>
        <button></button>
    </>
    )
}

export default ImageUpload