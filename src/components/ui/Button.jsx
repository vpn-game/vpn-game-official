// src/components/ui/Button.jsx

import React from "react";

// Reusable button component with props support
export const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
