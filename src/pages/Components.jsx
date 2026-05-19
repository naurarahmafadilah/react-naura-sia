import React, { useState } from "react";

// IMPORT SEMUA KOMPONEN REUSABLE (1 - 6)
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Avatar from "../components/Avatar"; 
import Badge from "../components/Badge"; 
import Container from "../components/Container"; 
import Card from "../components/Card"; 
import ProductCard from "../components/ProductCard"; 
import Table from "../components/Table"; 
import Footer from "../components/Footer"; 
import InputField from "../components/InputField";
import TextArea from "../components/TextArea";
import SelectField from "../components/SelectField";
import Alert from "../components/Alert";
import Loading from "../components/Loading";
import Modal from "../components/Modal";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";

export default function Components() {
  // State interaktif khusus demo Modal (Kategori 5)
  const [openModalDemo, setOpenModalDemo] = useState(false);

  // Data Header & Baris untuk Table (Kategori 3 & 5)
  const tableHeaders = ["No", "Nama Menu", "Kategori", "Harga", "Status", "Aksi"];
  
  const foodMenus = [
    { id: 1, name: "Nasi Goreng Spesial", category: "Makanan Utama", price: "Rp 28.000", status: "success", statusText: "Ready" },
    { id: 2, name: "Ayam Bakar Madu", category: "Makanan Utama", price: "Rp 35.000", status: "warning", statusText: "Cooking" },
    { id: 3, name: "Es Teh Manis Jumbo", category: "Minuman", price: "Rp 6.000", status: "danger", statusText: "Empty" }
  ];

  // Data Nilai Unggul untuk FeatureSection (Kategori 6)
  const restaurantFeatures = [
    { icon: "👨‍🍳", title: "Koki Profesional", desc: "Hidangan diracik oleh koki berpengalaman bersertifikasi." },
    { icon: "🍃", title: "Bahan Segar", desc: "100% menggunakan bahan organik pilihan segar setiap hari." },
    { icon: "⚡", title: "Penyajian Kilat", desc: "Makanan diantar ke meja Anda kurang dari 15 menit." }
  ];

  return (
    <div className="p-6 font-barlow animate-in fade-in duration-500 min-h-screen flex flex-col justify-between">
      
      {/* WRAPPER KONTEN UTAMA */}
      <div className="space-y-10">
        
        {/* TOP PAGE HEADER */}
        <PageHeader title="Components" breadcrumb={["Dashboard", "Components"]} />

        {/* --------------------------------------------------------- */}
        {/* 1 & 2. BASIC COMPONENTS (BUTTONS, AVATARS, BADGES) */}
        {/* --------------------------------------------------------- */}
        <div>
          <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest border-b pb-2 border-gray-100 mb-4">
            1 & 2. Basic Components (Button, Avatar, Badge)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Button */}
            <div>
              <p className="text-xs font-bold text-gray-400 mb-2">Button Variants</p>
              <div className="flex gap-2">
                <Button type="success">Simpan</Button>
                <Button type="danger">Hapus</Button>
              </div>
            </div>
            {/* Avatar */}
            <div>
              <p className="text-xs font-bold text-gray-400 mb-2">Avatar Initials</p>
              <div className="flex gap-2">
                <Avatar name="Chef Juna" />
                <Avatar name="Siti" />
              </div>
            </div>
            {/* Badge */}
            <div>
              <p className="text-xs font-bold text-gray-400 mb-2">Badge Statuses</p>
              <div className="flex flex-wrap gap-2">
                <Badge type="success">Ready</Badge>
                <Badge type="warning">Cooking</Badge>
                <Badge type="danger">Empty</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* --------------------------------------------------------- */}
        {/* 3. LAYOUT COMPONENTS (CONTAINER & CARD & PRODUCT CARD) */}
        {/* --------------------------------------------------------- */}
        <div>
          <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest border-b pb-2 border-gray-100 mb-4">
            3. Layout Components (Container, Card, ProductCard, Table)
          </h3>
          <div className="space-y-6">
            {/* Row 1: Container & Card Standard */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Container className="bg-gray-50/50">
                <h4 className="text-lg font-poppins font-bold text-gray-800 mb-1">Container Box</h4>
                <p className="text-gray-500 text-sm">Container ini menggunakan background abu-abu tipis untuk membedakan area khusus.</p>
              </Container>
              <Card>
                <h4 className="text-lg font-poppins font-bold text-gray-800 mb-1">Card Box Standard</h4>
                <p className="text-gray-500 text-sm">Card ini berwarna putih bersih dengan shadow lembut untuk menonjolkan konten kertas.</p>
              </Card>
            </div>

            {/* Row 2: Product Card (Etalase Makanan) */}
            <div>
              <p className="text-xs font-bold text-gray-400 mb-3">Product Card Display</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProductCard
                  image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
                  title="Salmon Salad Sehat"
                  category="Makanan"
                  price="Rp 45.000"
                  description="Sayuran organik segar disajikan dengan potongan salmon panggang premium dan dressing lemon."
                />
                <ProductCard
                  image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
                  title="Pizza Keju Lumer"
                  category="Makanan"
                  price="Rp 75.000"
                  description="Adonan pizza tipis khas Italia dengan topping keju mozzarella melimpah dan saus tomat homemade."
                />
              </div>
            </div>

            {/* Row 3: Table Layout */}
            <div>
              <p className="text-xs font-bold text-gray-400 mb-3">Table Data Display</p>
              <Table headers={tableHeaders}>
                {foodMenus.map((menu, index) => (
                  <tr key={menu.id} className="hover:bg-emerald-50/30 transition-colors group cursor-default">
                    <td className="p-5 text-sm font-bold text-gray-400">{index + 1}</td>
                    <td className="p-5 text-sm font-poppins font-bold text-gray-800">{menu.name}</td>
                    <td className="p-5 text-sm font-medium text-gray-600">{menu.category}</td>
                    <td className="p-5 text-sm font-poppins font-bold text-emerald-500">{menu.price}</td>
                    <td className="p-5">
                      <Badge type={menu.status}>{menu.statusText}</Badge>
                    </td>
                    <td className="p-5">
                      <button className="text-emerald-600 hover:text-emerald-700 font-bold text-xs bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-xl transition-colors">
                        Lihat Resep
                      </button>
                    </td>
                  </tr>
                ))}
              </Table>
            </div>
          </div>
        </div>

        {/* --------------------------------------------------------- */}
        {/* 4. FORM COMPONENTS (INPUTFIELD, TEXTAREA, SELECTFIELD) */}
        {/* --------------------------------------------------------- */}
        <div>
          <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest border-b pb-2 border-gray-100 mb-4">
            4. Form Components (InputField, TextArea, SelectField)
          </h3>
          <Card className="max-w-xl">
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField label="Nama Masakan" placeholder="Contoh: Bebek Goreng Kremes" />
                <InputField label="Harga (Rp)" placeholder="Contoh: 45000" type="number" />
              </div>
              <SelectField label="Kategori Menu" options={["Makanan Utama", "Makanan Ringan", "Minuman", "Pencuci Mulut"]} />
              <TextArea label="Deskripsi / Resep Singkat" placeholder="Tuliskan detail bahan utama atau deskripsi rasa..." />
              <div className="flex justify-end gap-2 pt-2">
                <Button type="secondary">Batal</Button>
                <Button type="success">Simpan Menu</Button>
              </div>
            </div>
          </Card>
        </div>

        {/* --------------------------------------------------------- */}
        {/* 5. FEEDBACK COMPONENTS (ALERT, LOADING, MODAL) */}
        {/* --------------------------------------------------------- */}
        <div>
          <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest border-b pb-2 border-gray-100 mb-4">
            5. Feedback Components (Alert, Loading, Modal)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Alert & Spinner Loading */}
            <div className="space-y-4">
              <Alert type="success" message="Menu masakan baru berhasil disimpan ke database!" />
              <Alert type="danger" message="Koneksi terputus. Gagal memperbarui data pesanan." />
              <div className="p-3 bg-white rounded-2xl border border-gray-50 shadow-sm inline-block">
                <Loading />
              </div>
            </div>
            {/* Modal Trigger */}
            <Card className="flex flex-col justify-between items-start">
              <div>
                <h4 className="text-base font-poppins font-bold text-gray-800 mb-1">Pop-up Modal Overlay</h4>
                <p className="text-gray-400 text-xs">Klik tombol di bawah untuk memunculkan modal persetujuan pesanan dapur.</p>
              </div>
              <Button type="primary" className="mt-4" onClick={() => setOpenModalDemo(true)}>
                Buka Jendela Modal
              </Button>
            </Card>
          </div>
        </div>

        {/* --------------------------------------------------------- */}
        {/* 6. SECTION COMPONENTS (HERO & FEATURES FOR LANDING PAGE) */}
        {/* --------------------------------------------------------- */}
        <div>
          <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest border-b pb-2 border-gray-100 mb-4">
            6. Section Components (HeroSection, FeatureSection)
          </h3>
          <div className="space-y-6">
            <HeroSection 
              title="Rasakan Sensasi Kuliner Nusantara yang Autentik" 
              subtitle="Menyajikan cita rasa tradisional Indonesia dengan sentuhan modern dan higienis langsung ke meja Anda."
              image="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            />
            <FeatureSection features={restaurantFeatures} />
          </div>
        </div>

      </div>

      {/* ========================================================= */}
      {/* GLOBAL OVERLAY MODAL (RENDER OUTSIDE CONTENT FLOW) */}
      {/* ========================================================= */}
      <Modal isOpen={openModalDemo} onClose={() => setOpenModalDemo(false)} title="Konfirmasi Pesanan">
        <div className="font-barlow text-sm text-gray-600 space-y-4">
          <p>Apakah Anda yakin ingin memproses pesanan <strong>Nasi Goreng Spesial (3x)</strong> ke barisan antrean dapur?</p>
          <div className="flex gap-3 justify-end pt-4 border-t border-gray-100">
            <Button type="secondary" onClick={() => setOpenModalDemo(false)}>Kembali</Button>
            <Button type="success" onClick={() => setOpenModalDemo(false)}>Ya, Kirim Koki</Button>
          </div>
        </div>
      </Modal>

      {/* FOOTER STATIS APP */}
      <Footer />

    </div>
  );
}