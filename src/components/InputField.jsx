import React from "react";

export default function InputField({ label, type = "text", placeholder, className = "" }) {
  return (
    <div className={`w-full font-barlow ${className}`}>
      <label className="text-[10px] font-black text-gray-400 uppercase ml-2 mb-1.5 block tracking-wider">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-gray-50 text-gray-800 text-sm font-medium border-none rounded-2xl p-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all duration-200 placeholder:text-gray-400"
      />
    </div>
  );
}