import axios from "axios";

export const uploadImage = async (image: File): Promise<string | null> => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", process.env.CLOUDINARY_UPLOAD_PRESET!);
  let response;
  try {
    response = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUDNAME}/upload`,
      formData
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
    return null;
  }
  return response.data.public_id;
};
