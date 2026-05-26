import React from "react";
import PageHeader from "../components/PageHeader";

export default function FiturXYZ() {
  return (
    <div className="p-6 font-barlow animate-in fade-in duration-500 text-gray-800">
      
      {/* HEADER */}
      {/* Menggunakan property breadcrumb bawaan Anda untuk menampilkan "Dashboard / Order List" */}
      <PageHeader title="Fitur Xyz" breadcrumb={["Dashboard", "Order List"]} />

      {/* KONTEN UTAMA */}
      <div className="mt-6 text-base font-medium text-gray-900">
        Ini Halaman Fitur Xyz
      </div>

    </div>
  );
}