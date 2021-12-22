import React, { useState, useEffect } from 'react';
import axios from "axios";

const ImageUpload: React.FC<any> = ({ uploadImg }) => {
  const token = process.env.REACT_APP_ACCESS_TOKEN;
  const [imgFile, setImgFile] = useState({});
  const imageUpload = (e: any): void => {
    let imageFile = e.target.files[0];
    let imagePreset = new FormData();
    imagePreset.append("file", imageFile);
    imagePreset.append("upload_preset", "Ubiquiti");
    setImgFile(imagePreset);
  };

  const postToCloude = async () => {
    try {
        const response = await axios.post(`https://api.cloudinary.com/v1_1/${token}/image/upload`, imgFile);
        uploadImg({
          target: {
            name: "imageUrl",
            value: response.data.secure_url,
          },
        });
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    postToCloude();
  }, [imgFile]);

  return (
    <div>
       <label htmlFor="files" className="file"> Select Image </label>
      <input id="files" type="file" style={{ visibility: "hidden" }} onChange={imageUpload} />
    </div>
  )
}

export default ImageUpload;