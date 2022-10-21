import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
};

const TextField: React.FC<TextFieldProps> = ({ label, ...props }) => {
  const [field, { error }] = useField(props);

  return (
    <div className="w-full max-w-sm ">
      <label className="p-3 font-light">{label}</label>
      <input
        {...props}
        {...field}
        className="w-full bg-black rounded-lg my-2 h-10 text-white p-4 transition-all border"
      />
      {error ? <div className="text-red-600">{error}</div> : null}
    </div>
  );
};

export default TextField;
