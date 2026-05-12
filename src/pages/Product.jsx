import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import productsData from "../data/products.json"; 

export default function Product() {
  const [showForm, setShowForm] = useState(false);
  const [products] = useState(productsData);

  return (
    <div className="p-6 font-barlow animate-in fade-in duration-500">
      
      {/* HEADER */}
      <PageHeader title="Product List" breadcrumb={["Home", "Product"]}>
        <button
          onClick={() => setShowForm(true)}
          className="bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-emerald-600 transition shadow-lg shadow-emerald-200 flex items-center gap-2"
        >
          <span className="text-xl">+</span> Add Product
        </button>
      </PageHeader>

      {/* TABLE CARD */}
      <div className="bg-white rounded-[2rem] shadow-soft overflow-hidden mt-8 border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="p-5 text-xs font-black text-gray-400 uppercase tracking-widest">Code</th>
                <th className="p-5 text-xs font-black text-gray-400 uppercase tracking-widest">Product Details</th>
                <th className="p-5 text-xs font-black text-gray-400 uppercase tracking-widest">Brand & Category</th>
                <th className="p-5 text-xs font-black text-gray-400 uppercase tracking-widest">Price</th>
                <th className="p-5 text-xs font-black text-gray-400 uppercase tracking-widest">Inventory</th>
                <th className="p-5 text-xs font-black text-gray-400 uppercase tracking-widest text-center">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-50">
              {products.map((item) => (
                <tr key={item.id} className="hover:bg-emerald-50/30 transition-colors group">
                  <td className="p-5 text-sm font-bold text-gray-400">{item.code}</td>
                  <td className="p-5">
                    <Link 
                      to={`/product/${item.id}`} 
                      className="text-gray-800 font-poppins font-bold hover:text-emerald-500 transition-colors block"
                    >
                      {item.title}
                    </Link>
                  </td>
                  <td className="p-5">
                    <div className="text-sm font-medium text-gray-600">{item.brand}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-bold">{item.category}</div>
                  </td>
                  <td className="p-5 text-sm font-poppins font-bold text-gray-700">
                    Rp {item.price.toLocaleString("id-ID")}
                  </td>
                  <td className="p-5">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm ${
                      item.stock < 20 ? 'bg-red-100 text-red-600' : 'bg-emerald-100 text-emerald-600'
                    }`}>
                      {item.stock} Units
                    </span>
                  </td>
                  <td className="p-5 text-center">
                    <Link 
                      to={`/product/${item.id}`}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gray-50 text-gray-400 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-sm"
                    >
                      →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL ADD PRODUCT (Sama dengan Style Customer) */}
      {showForm && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-gray-900/40 backdrop-blur-md animate-in fade-in duration-300" 
            onClick={() => setShowForm(false)} 
          />
          <div className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="bg-emerald-500 p-6 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-2xl font-poppins font-bold">New Product</h2>
                <p className="text-emerald-100 text-sm opacity-80">Tambah menu atau produk baru ke sistem.</p>
              </div>
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            </div>

            <form className="p-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4 font-barlow">
                <div>
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-2 mb-1 block">Product Title</label>
                  <input type="text" placeholder="Contoh: Ayam Penyet" className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-black text-gray-400 uppercase ml-2 mb-1 block">Price (Rp)</label>
                    <input type="number" placeholder="0" className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-gray-400 uppercase ml-2 mb-1 block">Initial Stock</label>
                    <input type="number" placeholder="0" className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-2 mb-1 block">Category</label>
                  <select className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-emerald-500 outline-none font-bold text-gray-600 appearance-none cursor-pointer">
                    <option>Food</option>
                    <option>Beverage</option>
                    <option>Snack</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 py-4 bg-gray-100 text-gray-500 rounded-2xl font-bold hover:bg-gray-200 transition active:scale-95"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-4 bg-emerald-500 text-white rounded-2xl font-bold hover:bg-emerald-600 transition shadow-lg shadow-emerald-100 active:scale-95"
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}