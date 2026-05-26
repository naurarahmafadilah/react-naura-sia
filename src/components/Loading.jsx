import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center gap-3 font-barlow font-bold text-sm text-gray-500">
      <div className="w-5 h-5 border-3 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
      <span>Memproses hidangan...</span>
    </div>
  );
}