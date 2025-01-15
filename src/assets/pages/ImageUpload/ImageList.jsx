import axios from 'axios'
import React, { useEffect, useState } from 'react'



function ImageList() {
    const [Image, setImage] = useState([])
    console.log(Image, "Image")
    useEffect(() => {
        const fetcheData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/photo")
                setImage(response.data)
            } catch (error) {
                console.log("an error occured while fetching data")
            }
        }
        fetcheData()
    }, [])
    return (<>
        <div>ImageList</div>
        {Image.length}
        <div><p>id:1</p><p>filename:</p><img src="" /></div>
    </>
    )
}

export default ImageList