<<<<<<< HEAD
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Sidebar from '../sidebar/Sidebar';
=======
import React, {useState, useEffect} from "react";
import axios from "axios";
import '../../styles/ImageUpload.css'
import Sidebar from "../sidebar/Sidebar";
>>>>>>> e8079a7d12299d6b611da2b5d7dc9916c7fbdd6e

const UpFile = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const handleFileInput = (e) => {
        e.preventDefault();
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', selectedFile);
        try {
            const response = await axios.post(
                'http://127.0.0.1:8080/bottle/log/api/upload',
                formData
            );
            console.log("response.data.imageUrl", response.data)
            setImageUrl(response.data);
        } catch (err) {
            console.log(err)
        }

    };

    useEffect(() => {

        console.log("imageUrl", imageUrl)

    }, [imageUrl]);
    return (
<<<<<<< HEAD
        <div>
            <Sidebar/>
            <form>
                <input type="file" onChange={handleFileInput}/>
                <button onClick={handleSubmit}>Upload</button>
            </form>
            {imageUrl && <img src={imageUrl} alt="uploaded image"/>}
=======
        <div id="upload_contents">
            <Sidebar/>
            <input
                id="input"
                type="file"
                onChange={(e) => {
                    encodeFileToBase64(e.target.files[0]);
                }}/>
            <button id="upload" onClick={handleUpload}>Upload</button>
            <div id="img">{imageUrl && <img src={imageUrl} alt="Uploaded Image"/>}{imageUrl && <img src={detect_file} alt="Uploaded Image"/>}</div>

>>>>>>> e8079a7d12299d6b611da2b5d7dc9916c7fbdd6e
        </div>

    );
}

export default UpFile;