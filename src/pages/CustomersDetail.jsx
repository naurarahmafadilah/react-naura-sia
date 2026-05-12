import { useParams, useNavigate } from "react-router-dom";
import customersData from "../data/customers.json"; // 👈 Ambil data dari JSON 30 pelanggan
import { FaArrowLeft, FaUser, FaEnvelope, FaPhone, FaGem, FaCalendarAlt, FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";

export default function CustomersDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // 1. Cari customer berdasarkan ID dari URL string (misal: "CUST-1001")
  const customer = customersData.find((item) => item.id === id);

  // 2. Jika ID tidak ditemukan dalam JSON
  if (!customer) {
    return (
      <div className="p-10 text-center font-poppins">
        <div className="w-24 h-24 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
           <FaUser size={40} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Pelanggan Tidak Ditemukan</h2>
        <p className="text-gray-500 mb-6">ID {id} tidak terdaftar dalam database kami.</p>
        <button 
          onClick={() => navigate("/customers")}
          className="bg-emerald-500 text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-600 transition"
        >
          Kembali ke Daftar Pelanggan
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 font-barlow animate-in fade-in duration-500">
      {/* Header & Back Button */}
      <div className="flex items-center gap-4 mb-8">
        <button 
          onClick={() => navigate(-1)}
          className="p-3 bg-white rounded-2xl shadow-soft hover:bg-gray-50 text-emerald-500 transition"
        >
          <FaArrowLeft size={20} />
        </button>
        <div>
          <h1 className="text-3xl font-poppins font-bold text-gray-800">{customer.name}</h1>
          <p className="text-gray-400 font-medium">Customer Profile • {customer.id}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Kolom Kiri: Avatar & Loyalty Card */}
        <div className="lg:col-span-1">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-soft border border-gray-100 flex flex-col items-center text-center relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500"></div>
            
            <div className="w-32 h-32 bg-emerald-50 rounded-[2.5rem] flex items-center justify-center text-emerald-500 mb-6 shadow-inner relative">
              <FaUser size={60} />
              <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-xl shadow-md text-yellow-500 border border-gray-50">
                <FaGem size={20} />
              </div>
            </div>

            <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 shadow-sm ${
              customer.loyalty === "Gold" ? "bg-yellow-100 text-yellow-600" :
              customer.loyalty === "Silver" ? "bg-slate-100 text-slate-500" : "bg-orange-100 text-orange-600"
            }`}>
              {customer.loyalty} Member
            </span>
            
            <h2 className="text-xl font-poppins font-bold text-gray-800 leading-tight mb-1">{customer.name}</h2>
            <p className="text-gray-400 text-sm mb-6">{customer.email}</p>

            <div className="w-full pt-6 border-t border-gray-50 flex justify-around">
               <div className="text-center">
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Status</p>
                 <p className="text-emerald-500 font-bold">Active</p>
               </div>
               <div className="border-l border-gray-100"></div>
               <div className="text-center">
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Points</p>
                 <p className="text-gray-800 font-bold">1,240</p>
               </div>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Detail Informasi */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-[2.5rem] shadow-soft border border-white">
            <h3 className="text-lg font-poppins font-bold text-gray-800 mb-6 border-b border-gray-50 pb-4">Personal Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {/* Email */}
              <div className="flex items-center gap-5">
                <div className="p-4 bg-emerald-50 rounded-2xl text-emerald-500">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Email Address</p>
                  <p className="font-bold text-gray-700">{customer.email}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-5">
                <div className="p-4 bg-blue-50 rounded-2xl text-blue-500">
                  <FaPhone size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Phone Number</p>
                  <p className="font-bold text-gray-700">{customer.phone}</p>
                </div>
              </div>

              {/* Join Date */}
              <div className="flex items-center gap-5">
                <div className="p-4 bg-purple-50 rounded-2xl text-purple-500">
                  <FaCalendarAlt size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Member Since</p>
                  <p className="font-bold text-gray-700">12 May 2024</p>
                </div>
              </div>

              {/* Address (Simulasi) */}
              <div className="flex items-center gap-5">
                <div className="p-4 bg-orange-50 rounded-2xl text-orange-500">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Primary Location</p>
                  <p className="font-bold text-gray-700">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>

            {/* Statistik Belanja */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-gray-900 rounded-[2rem] text-white flex justify-between items-center overflow-hidden relative group">
                <div className="relative z-10">
                  <p className="text-xs font-bold uppercase opacity-60 mb-1 tracking-widest">Total Orders</p>
                  <p className="text-3xl font-poppins font-bold">42 <span className="text-sm font-medium opacity-50">Trans</span></p>
                </div>
                <FaShoppingCart size={80} className="absolute -right-4 -bottom-4 opacity-10 -rotate-12 group-hover:scale-110 transition-transform" />
              </div>

              <div className="p-6 bg-emerald-500 rounded-[2rem] text-white flex justify-between items-center overflow-hidden relative group">
                <div className="relative z-10">
                  <p className="text-xs font-bold uppercase opacity-70 mb-1 tracking-widest">Lifetime Spending</p>
                  <p className="text-3xl font-poppins font-bold">Rp 2,5M <span className="text-sm font-medium opacity-70">Total</span></p>
                </div>
                <FaGem size={80} className="absolute -right-4 -bottom-4 opacity-20 rotate-12 group-hover:scale-110 transition-transform" />
              </div>
            </div>

            {/* Additional Note */}
            <div className="mt-8 p-6 bg-gray-50 rounded-3xl border border-gray-100">
               <h4 className="font-poppins font-bold text-gray-800 mb-2 flex items-center gap-2">
                 <div className="w-1.5 h-4 bg-emerald-500 rounded-full"></div>
                 Staff Note
               </h4>
               <p className="text-gray-500 text-sm leading-relaxed">
                  Pelanggan ini merupakan kategori <strong>High Value</strong> dengan preferensi produk makanan cepat saji. 
                  Selalu berikan penawaran promo khusus kategori {customer.loyalty} untuk menjaga retensi.
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}