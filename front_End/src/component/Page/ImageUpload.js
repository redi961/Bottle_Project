import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Sidebar from '../sidebar/Sidebar';
import '../../styles/ImageUpload.css'

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
        <div id='test'>
            <Sidebar/>
            <div id='input_button'>
                <form>
                    <input id='inputfile' type="file" onChange={handleFileInput}/>
                    <button id='upload' onClick={handleSubmit}>Upload</button>
                </form>
            </div>
                {imageUrl && <img src={imageUrl} alt="uploaded image"/>}
        </div>

    );
}

export default UpFile;