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

    const handleDelete = async (id) => {
        const conf = window.confirm("Do you want to delete")
        if (conf) {
            try {
                const response = await axios.delete("http://localhost:3000/photo/" + id)
                console.log(response)
                alert("user Deleted successfully")

                const fetcheData = async () => {
                    try {
                        const response = await axios.get("http://localhost:3000/photo")
                        setImage(response.data)
                    } catch (error) {
                        console.log("an error has occured while fetching data")
                    }
                }
                fetcheData()

            } catch (error) {
                console.error(error)
            }

        }
    }

    return (<>
        <Link to="/uploadImage">
            <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add Images</button>
        </Link>
        <div>ImageList</div>
        {<div className='flex gap-10 flex-wrap'>{image.map((image, index) => (<div key={index}><p>id:{image.id}</p>
            <p>filename:{image.filename}</p>
            <img className='max-w-80 max-h-36' src={`http://localhost:3000/images/${image.filename}`} />
            <button onClick={e => handleDelete(image.id)}
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
                Delete
            </button>
        </div>))}

        </div>
        }
    </>
    )
}

export default ImageList