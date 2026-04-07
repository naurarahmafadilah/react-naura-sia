import React from "react";
import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        // Latar belakang halaman yang lembut agar card putih lebih menonjol
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            
            {/* Header Halaman */}
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                    Framework Directory
                </h1>
                <p className="mt-3 max-w-2xl mx-auto text-lg text-slate-500">
                    Kumpulan framework populer beserta informasi developer dan fiturnya.
                </p>
            </div>

            {/* Grid Container: 1 kolom di HP, 2 kolom di Tablet, 3 kolom di Desktop */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {frameworkData.map((item) => (
                    <div 
                        key={item.id} 
                        className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                    >
                        {/* Bagian Atas: Judul & Deskripsi */}
                        <div className="mb-5">
                            <h2 className="text-xl font-bold text-slate-800 mb-2">
                                {item.name}
                            </h2>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </div>

                        {/* Bagian Tengah: Info Developer */}
                        <div className="mb-6 flex-grow">
                            <div className="inline-flex items-center px-3 py-2 bg-slate-50 text-slate-600 text-sm rounded-lg border border-slate-200 w-full">
                                <span className="mr-2">👨‍💻</span>
                                <span>
                                    By <span className="font-semibold text-slate-800">{item?.details?.developer}</span> 
                                    <span className="text-slate-500 ml-1">({item?.details?.releaseYear})</span>
                                </span>
                            </div>
                        </div>

                        {/* Bagian Tag (Bentuk Pill Modern) */}
                        <div className="mb-6 flex gap-2 flex-wrap">
                            {item?.tags?.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-indigo-50 text-indigo-600 px-3 py-1 text-xs font-semibold rounded-full border border-indigo-100"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Bagian Bawah: Tombol Action */}
                        <div className="mt-auto pt-5 border-t border-slate-100">
                            <a
                                href={item?.details?.officialWebsite}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex justify-center items-center w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2.5 px-4 rounded-xl transition-colors duration-200"
                            >
                                Visit Official Website
                                {/* Ikon panah kecil */}
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}