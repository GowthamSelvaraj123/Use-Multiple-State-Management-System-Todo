import React from "react";

export default function AddModal({ show, onClose, title = "Notification", message }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center popup">
      <div className="bg-white p-6 rounded-2xl w-80 max-w-lg relative shadow-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          ×
        </button>

        {/* Modal Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-left">
          {title}
        </h2>

        {/* Modal Message */}
        <div className="text-left text-base text-gray-700">
          {message}
        </div>
      </div>
    </div>
  );
}
