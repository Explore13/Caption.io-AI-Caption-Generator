import React from 'react';

const ToastNotification = ({ show, message, type }) => {
  if (!show) return null;

  return (
    <div
      className={`fixed bottom-20 right-5 px-4 py-3 rounded-md text-white transition-all duration-300 ${
        type === "success" ? "bg-green-300" : "bg-red-300"
      }`}
    >
      {message}
    </div>
  );
};

export default ToastNotification;
