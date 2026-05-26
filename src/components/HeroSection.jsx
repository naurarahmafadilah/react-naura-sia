import React from "react";
import Button from "./Button";

export default function HeroSection({ title, subtitle, image }) {
  return (
    <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-[400px] flex items-center p-8 sm:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10 w-full">
        <div className="space-y-4">
          <span className="text-emerald-400 font-poppins font-black text-xs uppercase tracking-widest bg-emerald-500/10 px-3 py-1.5 rounded-full">
            Selamat Datang di Sedap.
          </span>
          <h1 className="text-3xl sm:text-4xl font-poppins font-black leading-tight">
            {title}
          </h1>
          <p className="text-gray-300 text-sm font-medium leading-relaxed max-w-sm">
            {subtitle}
          </p>
          <div className="pt-2">
            <Button type="primary">Jelajahi Menu</Button>
          </div>
        </div>
        <div className="hidden md:block aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          <img src={image} alt="Hero Restoran" className="w-full h-full object-cover" />
        </div>
      </div>
      {/* Dekorasi Cahaya Abstrak Belakang */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
}