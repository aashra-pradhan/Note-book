import React from "react";

const Button = ({ type, value, onClickFunction, variant }) => {
  switch (variant) {
    case "normal":
      return (
        <button
          type={type}
          onClick={onClickFunction}
          className="border-2 h-[55px] max-w-32 bg-cyan-400 border-orange-200 rounded-md font-sans	text-xl	font-semibold p-5 flex items-center"
        >
          {value}
        </button>
      );

    case "danger":
      // You need to return JSX for the "danger" variant as well.
      return (
        <button
          type={type}
          onClick={onClickFunction}
          className="border-2 h-[55px] max-w-32 bg-red-500 border-orange-200 rounded-md font-sans	text-xl	font-semibold p-5 flex items-center"
        >
          {value}
        </button>
      );

    default:
      return null; // or some default behavior if needed
  }
};

export default Button;
