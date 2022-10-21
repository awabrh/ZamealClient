import React from "react";

interface ButtonProps {
    label? : string
    onClick? : React.MouseEventHandler<HTMLButtonElement>
}

function Button({label , onClick} : ButtonProps ) {

  return (
    <button
      className="bg-primary mt-3 rounded-md px-8 pb-2 text-lg hover:bg-purple-900 transition-all"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
