import { v2 as cloudinary } from "cloudinary";
import fs from 'fs';


// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
// });

cloudinary.config({
    cloud_name:"dq7jdy5xy",
    api_key:"459171858769688",
    api_secret:"6NC9nJnd1yk0ypF1GwR1osFmYj0"
})


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto'
        })

        // file has been successfully
        
        fs.unlinkSync(localFilePath)
   
        return response;

    } catch (error) {
        
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed.
        return null;
    }
}

export { uploadOnCloudinary }