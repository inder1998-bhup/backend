import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
          
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key:  process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null;

        //uploading file
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto',
        })

        //now file is uploaded
        console.log("file is uploaded ", response.url);
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove locall saved temaporary file as the upload operation got failed
        return null
    }
}

export { uploadOnCloudinary }