import React, {useState, useEffect} from "react";
import axios from "axios";
import './ImageUpload.css'

function ImageUpload() {
    const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [detect_file, detect_setFile] = useState(null);

    const handleUpload = () => {
        const formData = new FormData();
        formData.append("image", file);
        setImageUrl(file);

        axios
            .post("/api/upload", formData)
            .then((response) => {
                detect_setFile(response.data);

            })
            .catch((error) => {
                console.log(error);
            });
    };

    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
            reader.onload = () => {
                setImageUrl(reader.result);
                resolve();
            };
        });
    };

    return (
        <div>
            <input
                id="input"
                type="file"
                onChange={(e) => {
                    encodeFileToBase64(e.target.files[0]);
                }}/>
            <button onClick={handleUpload}>Upload</button>
            <div id="img">{imageUrl && <img src={imageUrl} alt="Uploaded Image"/>}{imageUrl && <img src={detect_file} alt="Uploaded Image"/>}</div>
            
        </div>
    );
}

export default ImageUpload;