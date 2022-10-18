import React from "react";

interface TextFieldProps {
    label? : string
    type? : React.HTMLInputTypeAttribute
    name? : string
    value? : string | number | readonly string[]
    onChange? : React.ChangeEventHandler<HTMLInputElement>
    placeholder? : string
}

function TextField({label, type, name, value, onChange, placeholder} : TextFieldProps) {

  return (
    <div className="w-full max-w-sm ">
        <label className="p-3 font-light" >{label}</label>
        <input 
        type={type}
        name = {name}
        className="w-full bg-black rounded-lg my-2 h-10 text-white p-4 transition-all border"
        value={value}
        onChange = {onChange}
        placeholder = {placeholder}
        />
    </div>
  );
}

export default TextField;
