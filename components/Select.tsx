import React, { SelectHTMLAttributes, useEffect } from "react";
import { useField, useFormikContext } from "formik";
import { FullRegisterInput } from "../generated/graphql";
import { collegeDeps, colleges } from "../utils/colleges";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  name: string;
  setOptions?: React.Dispatch<React.SetStateAction<string[]>>;
};

const Select: React.FC<SelectProps> = ({
  children,
  label,
  setOptions,
  ...props
}) => {
  const [field] = useField(props);
  const {
    values: { college },
    setFieldValue,
  } = useFormikContext<FullRegisterInput>();

  useEffect(() => {
    if (field.name === "dep" && setOptions) {
      const options = collegeDeps[college as keyof colleges];
      setOptions(options);
      setFieldValue("dep", options[0]);
    }
  }, [college, setFieldValue]);

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
