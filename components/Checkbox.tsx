import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  text?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({ text, ...props }) => {
  const [field] = useField(props);
  return (
    <div className="flex items-center gap-3 py-3">
      <input
        {...props}
        {...field}
        type="checkbox"
        className="bg-black text-primary rounded-md h-5 w-5 transition-all"
      />
      <p className="font-light">{text}</p>
    </div>
  );
};

export default Checkbox;
