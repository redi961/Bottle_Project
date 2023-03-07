import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Sidebar from '../sidebar/Sidebar';
import '../../styles/ImageUpload.css'

const UpFile = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(
        "default.gif"
    );

    const handleFileInput = (e) => {
        e.preventDefault();
        setSelectedFile(e.target.files[0]);
    };
    //sessionStorage.getItem("name");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', selectedFile);
        formData.append("name",sessionStorage.getItem("name"));

        try {
            const response = await axios.post(
                'http://127.0.0.1:8080/bottle/log/api/upload',
                 formData
            );
            console.log("response.data.imageUrl", response.data)
            let tmp = response.data ;
            tmp = tmp.replace('file:///C:/Users/user/Desktop/Pro_Seoreu/project_2/../../../front_End/public', '')
            setImageUrl(tmp);
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        console.log("imageUrl", imageUrl)

    }, [imageUrl]);
    
    return (
        <> 
        < Sidebar /> 
        <div className='file_input_content'>

            <form className='input_file_form'>
                <label className='input_label' for="input_file_id">File Select</label>
                <input
                    className='input_file'
                    id='input_file_id'
                    type="file"                                      
                    onChange={handleFileInput}/>
                <button className='button_Upload' onClick={handleSubmit}>Upload</button>
                {imageUrl && <img className='img_up' src={imageUrl} alt="uploaded image"/>}                
            </form>
         
            

        </div>
    </>

    );
}

export default UpFile;