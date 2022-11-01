import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  type: "submit" | "reset" | "button";
  label?: string;
};

const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button
      {...props}
      className="bg-primary rounded-md px-8 pb-2 text-lg hover:bg-purple-900 transition-all"
    >
      {label}
    </button>
  );
};

export default Button;
