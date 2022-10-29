import { Cloudinary } from "@cloudinary/url-gen";

const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.CLOUDINARY_CLOUDNAME,
  },
});

export const getImage = (imageId: string) => {
  const id = imageId === "" ? "bhcir6reqesukouuuv9q" : imageId;
  return cld.image(id).toURL();
};
