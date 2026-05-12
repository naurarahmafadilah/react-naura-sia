import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import customersData from "../data/customers.json";

export default function Customers() {
  const [showForm, setShowForm] = useState(false);
  const [customers] = useState(customersData);

  return (
    <div className="p-6 font-barlow animate-in fade-in duration-500">
      
      {/* HEADER */}
      <PageHeader title="Customer List" breadcrumb={["Home", "Customers"]}>
        <button
          onClick={() => setShowForm(true)}
          className="bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-emerald-600 transition shadow-lg shadow-emerald-200 flex items-center gap-2"
        >
          <span className="text-xl">+</span> Add Customer
        </button>
      </PageHeader>

      {/* TABLE */}
      <div className="bg-white rounded-[2rem] shadow-soft overflow-hidden mt-8 border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            
            <thead className="bg-gray-50/50 border-b border-gray-100">
              <tr>
                <th className="p-5 text-xs font-black text-gray-400 uppercase tracking-widest">ID</th>
                <th className="p-5 text-xs font-black text-gray-400 uppercase tracking-widest">Customer Name</th>
                <th className="p-5 text-xs font-black text-gray-400 uppercase tracking-widest">Contact Info</th>
                <th className="p-5 text-xs font-black text-gray-400 uppercase tracking-widest">Loyalty Status</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-50">
              {customers.map((customer) => (
                <tr
                  key={customer.id}
                  className="hover:bg-emerald-50/30 transition-colors group cursor-default"
                >
                  <td className="p-5 text-sm font-bold text-gray-400">
                    {customer.id}
                  </td>
                  <td className="p-5">
                    {/* PERBAIKAN: Link diubah menjadi /customers/ sesuai App.jsx */}
                    <Link 
                      to={`/customers/${customer.id}`} 
                      className="text-gray-800 font-poppins font-bold hover:text-emerald-500 transition-colors block"
                    >
                      {customer.name}
                    </Link>
                  </td>
                  <td className="p-5">
                    <div className="text-sm font-medium text-gray-600">{customer.email}</div>
                    <div className="text-xs text-gray-400 tracking-wider">{customer.phone}</div>
                  </td>

                  <td className="p-5">
                    <span
                      className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm ${
                        customer.loyalty === "Gold"
                          ? "bg-yellow-100 text-yellow-700"
                          : customer.loyalty === "Silver"
                          ? "bg-slate-100 text-slate-500"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {customer.loyalty}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL ADD CUSTOMER */}
      {showForm && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-gray-900/40 backdrop-blur-md animate-in fade-in duration-300" 
            onClick={() => setShowForm(false)} 
          />
          <div className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="bg-emerald-500 p-6 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-2xl font-poppins font-bold">New Customer</h2>
                <p className="text-emerald-100 text-sm opacity-80">Tambahkan pelanggan baru ke database.</p>
              </div>
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            </div>

            <form className="p-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4 font-barlow">
                <div>
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-2 mb-1 block">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-2 mb-1 block">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-2 mb-1 block">Phone Number</label>
                  <input type="tel" placeholder="0812..." className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-2 mb-1 block">Loyalty Level</label>
                  <select className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-emerald-500 outline-none font-bold text-gray-600 appearance-none">
                    <option>Bronze</option>
                    <option>Silver</option>
                    <option>Gold</option>
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
                  Save Data
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}