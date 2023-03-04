import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dq7o1joxe",
  api_key: "841287791179364",
  api_secret: "U6weoZpsiuAOHptEKtrYKK3U3nc",
});

export const subirImagen = async (filepath)=>{
return await cloudinary.uploader.upload(filepath, {
    folder: "CalviApp",
  })
}
export const eliminarImagen = async (id)=>{
return await cloudinary.uploader.destroy(id)
}