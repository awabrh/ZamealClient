import React, { SelectHTMLAttributes } from "react";
import { useField } from "formik";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  name: string;
};

const Select: React.FC<SelectProps> = ({ children, label, ...props }) => {
  const [field] = useField(props);

  return (
    <div className="w-full max-w-sm ">
      <label className="p-3 font-light">{label}</label>
      <select
        {...props}
        {...field}
        className="bg-black my-2  w-full rounded-lg max-w-sm"
      >
        {children}
      </select>
    </div>
  );
};

export default Select;
