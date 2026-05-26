import React from "react";

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop overlay */}
      <div 
        className="absolute inset-0 bg-gray-900/40 backdrop-blur-md animate-in fade-in duration-300" 
        onClick={onClose} 
      />
      {/* Modal Box */}
      <div className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="bg-emerald-500 p-6 text-white">
          <h2 className="text-xl font-poppins font-bold">{title}</h2>
        </div>
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
}