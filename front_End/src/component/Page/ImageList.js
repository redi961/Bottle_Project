import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/ImageList.css'
import Sidebar from '../sidebar/Sidebar';

function ImageList() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${currentPage}&_limit=49`)
      .then(response => {
        setImages(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <>
      <Sidebar/>
      <div className="image-list">
        {images.map(image => (
          <img id='ImageList' key={image.id} src={image.url} alt={image.title} />
        ))}
      <div className="pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>back</button>
        <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
      </div>
      </div>
    </>
  );
}

export default ImageList;