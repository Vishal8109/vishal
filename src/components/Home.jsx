import React from 'react'
import UploadImage from './UploadImage'
import PreviewImage from './PreviewImage'
import { useState } from 'react'
import { enhancedImageAPI } from "../utils/enhancedImageAPI"

function Home() {
    const [uploadImage, setuploadImage] = useState(null);
    const [enhancedImage, setEnhancedImage] = useState(null);
    const [loading, setloading] = useState(false);

    const UploadImageHamdler = async (file) => {
        setuploadImage(URL.createObjectURL(file));
        setloading(true);
        // call api to enhance image
        try {
            const enhancedURL = await enhancedImageAPI(file);
            setEnhancedImage(enhancedURL);
            setloading(false);

        } catch (error) {
            console.log(error)
            alert("error while enhancing API");
        }
    }
    return (
        <>
            <UploadImage UploadImageHamdler={UploadImageHamdler} />
            <PreviewImage
                loading={loading}
                uploaded={uploadImage}
                enhanced={enhancedImage}

            />
        </>
    )
}

export default Home