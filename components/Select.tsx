import React from "react";

interface SelectProps {
  label?: string;
  children?: React.ReactNode;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

function Select({ children, label, onChange }: SelectProps) {
  return (
    <div className="w-full max-w-sm ">
      <label className="p-3 font-light">{label}</label>
      <select className="text-black my-2  w-full rounded-lg max-w-sm">
        {children}
      </select>
    </div>
  );
}

export default Select;
