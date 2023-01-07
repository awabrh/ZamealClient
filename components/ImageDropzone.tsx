import { useField } from "formik";
import React, { InputHTMLAttributes, useCallback } from "react";
import { useDropzone } from "react-dropzone";

type imageDropzoneProps = InputHTMLAttributes<HTMLInputElement> & {
  name: String;
  image: File | undefined;
  setImage: React.Dispatch<React.SetStateAction<File | undefined>>;
};

const ImageDropzone: React.FC<imageDropzoneProps> = ({
  image,
  setImage,
  ...props
}) => {
  const [field, { error }] = useField(props);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setImage(file);
  }, []);

  const { getInputProps, getRootProps } = useDropzone({
    onDrop: onDrop,
    accept: {
      "image/*": [],
    },
  });

  return (
    <div className="flex w-full max-w-sm justify-center ">
      <div
        {...getRootProps({
          className:
            "flex h-20 w-max items-center border-[1px] px-4 cursor-pointer",
        })}
      >
        <input
          {...getInputProps({
            ...props,
            ...field,
          })}
        />
        {image ? <p>{image.name}</p> : <p>اضغط هنا لرفع صورة للسيارة</p>}
      </div>
      {error ? <div className="text-red-600">{error}</div> : null}
    </div>
  );
};

export default ImageDropzone;
