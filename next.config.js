/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    disableStaticImages: true,
  },
  reactStrictMode: true,
  env: {
    CLOUDINARY_URL:
      "cloudinary://966684962655419:jxMVJ3HdIlqJYV5teD96DFdzFaw@dqws5t0at",
    CLOUDINARY_CLOUDNAME: "dqws5t0at",
    CLOUDINARY_UPLOAD_PRESET: "satsr8e3",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: "file-loader",
        },
      ],
    });
    return config;
  },
};
