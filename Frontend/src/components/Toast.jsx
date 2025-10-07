import React from "react";

const Toast = ({ message, type }) => {
  if (!message) return null;

  const baseStyle = `
    fixed top-[130px] sm:top-[62px] /* 👈 position just below navbar (adjust if navbar height changes) */
    left-1/2 -translate-x-1/2
    w-[90%] max-w-md   /* 👈 centered toast bar */
    px-4 py-3 
    rounded-lg shadow-lg 
    text-white font-medium 
    text-center
    transition-all duration-300
    z-[9999]
  `;

  const typeStyles = {
    success: "bg-green-600",
    warning: "bg-yellow-500",
    error: "bg-red-600",
  };

  return (
    <div className={`${baseStyle} ${typeStyles[type] || "bg-blue-600"}`}>
      {message}
    </div>
  );
};

export default Toast;