import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (loaclFilePath) => {
  try {
    if (!loaclFilePath) return null;

    // Upload file on cloudinary
    const response = await cloudinary.uploader.upload(loaclFilePath, {
      resource_type: "auto",
    });

    // file uploaded successfully
    console.log("File uploaded successfully on cloudinary", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(loaclFilePath); // remove file from local storage
    console.log("Error while uploading file on cloudinary", error);
    return null;
  }
};

export { uploadOnCloudinary };
