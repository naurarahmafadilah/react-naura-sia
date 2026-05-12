import { useParams, useNavigate } from "react-router-dom";
import productsData from "../data/products.json"; // 👈 Ambil data lokal
import { FaArrowLeft, FaBox, FaUtensils, FaStore } from "react-icons/fa";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // 1. Cari produk berdasarkan ID dari URL
  const product = productsData.find((item) => item.id === parseInt(id));

  // 2. Jika ID tidak ditemukan dalam JSON
  if (!product) {
    return (
      <div className="p-10 text-center font-poppins">
        <h2 className="text-2xl font-bold text-gray-800">Menu Tidak Ditemukan</h2>
        <button 
          onClick={() => navigate("/product")}
          className="mt-4 bg-emerald-500 text-white px-6 py-2 rounded-xl"
        >
          Kembali ke Daftar Produk
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
          <h1 className="text-3xl font-poppins font-bold text-gray-800">{product.title}</h1>
          <p className="text-gray-400 font-medium">Product Details • {product.code}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Kolom Kiri: Foto Produk */}
        <div className="lg:col-span-1">
          <div className="bg-white p-4 rounded-[2.5rem] shadow-soft border border-gray-100">
            <img
              src={product.image}
              alt={product.title}
              className="rounded-[2rem] w-full aspect-square object-cover shadow-inner"
            />
          </div>
        </div>

        {/* Kolom Kanan: Detail Informasi */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-[2.5rem] shadow-soft border border-white">
            <div className="flex justify-between items-start mb-6 border-b border-gray-50 pb-6">
              <div>
                <span className="px-4 py-1.5 bg-emerald-100 text-emerald-600 rounded-full text-xs font-bold uppercase tracking-widest">
                  {product.category}
                </span>
                <p className="text-4xl font-poppins font-bold text-gray-800 mt-4">
                  Rp {product.price.toLocaleString("id-ID")}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Status Stok</p>
                <p className={`text-lg font-bold ${product.stock < 20 ? 'text-red-500' : 'text-emerald-500'}`}>
                  {product.stock} Units Available
                </p>
              </div>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-2xl flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm text-emerald-500">
                  <FaUtensils />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Category</p>
                  <p className="font-bold text-gray-700">{product.category}</p>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-2xl flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm text-orange-500">
                  <FaStore />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Brand</p>
                  <p className="font-bold text-gray-700">{product.brand}</p>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-2xl flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm text-blue-500">
                  <FaBox />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Code</p>
                  <p className="font-bold text-gray-700">{product.code}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
               <h3 className="font-poppins font-bold text-gray-800 mb-2">Deskripsi Produk</h3>
               <p className="text-gray-500 leading-relaxed">
                  Nikmati kelezatan <strong>{product.title}</strong> persembahan dari <strong>{product.brand}</strong>. 
                  Dibuat dengan bahan baku berkualitas tinggi untuk menjaga rasa autentik yang khas. 
                  Cocok dinikmati kapan saja.
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}