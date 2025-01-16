import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ImageList() {
    const [image, setImage] = useState([])
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
        <Link to="/uploadImage">
            <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add Images</button>
        </Link>
        <div>ImageList</div>
        {<div>{image.map((image, index) => (<div key={index}><p>id:{image.id}</p>
            <p>filename:{image.filename}</p>
            <img src={`http://localhost:3000/images/${image.filename}`} /></div>))}</div>
        }

    </>
    )
}

export default ImageList