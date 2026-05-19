import React from "react";

export default function SelectField({ label, options = [], className = "" }) {
  return (
    <div className={`w-full font-barlow ${className}`}>
      <label className="text-[10px] font-black text-gray-400 uppercase ml-2 mb-1.5 block tracking-wider">
        {label}
      </label>
      <div className="relative">
        <select className="w-full bg-gray-50 text-gray-800 text-sm font-bold border-none rounded-2xl p-4 focus:ring-2 focus:ring-emerald-500 outline-none appearance-none cursor-pointer">
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        {/* Ikon panah kustom kecil di sebelah kanan select box */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
          <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
}