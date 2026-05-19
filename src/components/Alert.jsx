import React from "react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

export default function Alert({ message, type = "success" }) {
  const styles = {
    success: "bg-emerald-50 border-emerald-200 text-emerald-800",
    danger: "bg-rose-50 border-rose-200 text-rose-800",
  };

  return (
    <div className={`flex items-center gap-3 p-4 rounded-2xl border text-sm font-barlow font-medium ${styles[type]}`}>
      {type === "success" ? <FaCheckCircle className="text-emerald-500 shrink-0" size={16} /> : <FaExclamationCircle className="text-rose-500 shrink-0" size={16} />}
      <span>{message}</span>
    </div>
  );
}