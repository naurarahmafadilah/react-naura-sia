import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import { Routes, Route } from "react-router-dom";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
// Pastikan Anda meng-import ErrorPage yang sudah kita buat sebelumnya
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col">

        {/* HEADER */}
        <Header />

        {/* CONTENT AREA */}
        <main className="p-6">
          <Routes>

            {/* MAIN PAGES */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />

            {/* ERROR PAGES */}
            <Route
              path="/400"
              element={
                <ErrorPage
                  code="400"
                  title="Bad Request"
                  description="Permintaan tidak valid atau terjadi kesalahan pada input."
                  image="https://cdn-icons-png.flaticon.com/512/595/595067.png"
                />
              }
            />

            <Route
              path="/401"
              element={
                <ErrorPage
                  code="401"
                  title="Unauthorized"
                  description="Silakan login terlebih dahulu untuk mengakses halaman ini."
                  image="https://cdn-icons-png.flaticon.com/512/3064/3064155.png"
                />
              }
            />

            <Route
              path="/403"
              element={
                <ErrorPage
                  code="403"
                  title="Forbidden"
                  description="Akses ditolak. Anda tidak memiliki izin."
                  image="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"
                />
              }
            />

            {/* 404 */}
            <Route
              path="*"
              element={
                <ErrorPage
                  code="404"
                  title="Page Not Found"
                  description="Halaman yang kamu cari tidak ditemukan."
                  image="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                />
              }
            />

          </Routes>
        </main>

      </div>
    </div>
  );
}

export default App;