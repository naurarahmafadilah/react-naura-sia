import React from "react";

export default function FeatureSection({ features = [] }) {
  return (
    <div className="py-4">
      <div className="text-center max-w-md mx-auto mb-8">
        <h2 className="text-2xl font-poppins font-bold text-gray-800">Kenapa Harus Sedap?</h2>
        <p className="text-gray-400 text-xs font-medium mt-1">Kami berkomitmen memberikan standar kuliner dan pelayanan terbaik untuk Anda.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div key={index} className="bg-white border border-gray-100 rounded-[2rem] p-6 text-center shadow-sm">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl">
              {item.icon}
            </div>
            <h4 className="font-poppins font-bold text-gray-800 text-sm mb-1">{item.title}</h4>
            <p className="text-gray-400 text-xs font-medium leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}