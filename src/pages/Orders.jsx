// src/pages/Orders.jsx
import { useState } from "react";
import PageHeader from "../components/PageHeader";

const Orders = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Generate 30 data dummy
  const orders = Array.from({ length: 30 }, (_, i) => ({
    id: `ORD-${1000 + i}`,
    customer: `User ${i + 1}`,
    status: ["Pending", "Completed", "Cancelled"][Math.floor(Math.random() * 3)],
    total: Math.floor(Math.random() * 1000000),
    date: "2024-03-20"
  }));

  return (
    <div className="p-4">
      {/* PageHeader dengan props title, breadcrumb, dan button sebagai children */}
      <PageHeader title="Order List" breadcrumb={["Home", "Orders"]}>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition-colors shadow-md active:scale-95"
        >
          + Add Orders
        </button>
      </PageHeader>

      {/* Tabel Section */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4 text-gray-600">Order ID</th>
              <th className="p-4 text-gray-600">Customer Name</th>
              <th className="p-4 text-gray-600">Status</th>
              <th className="p-4 text-gray-600">Total Price</th>
              <th className="p-4 text-gray-600">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-4 font-semibold text-gray-800">{order.id}</td>
                <td className="p-4 text-gray-700">{order.customer}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    order.status === "Completed" ? "bg-green-100 text-green-600" :
                    order.status === "Pending" ? "bg-yellow-100 text-yellow-600" : "bg-red-100 text-red-600"
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="p-4 font-medium">Rp {order.total.toLocaleString()}</td>
                <td className="p-4 text-gray-500 text-sm">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Form Sesuai Atribut JSON */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl animate-in fade-in zoom-in duration-200">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Order</h2>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Order ID</label>
                <input type="text" placeholder="ORD-1031" className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none bg-gray-50" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name</label>
                <input type="text" placeholder="Masukkan nama pelanggan" className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none bg-white">
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Total Price (Rp)</label>
                <input type="number" placeholder="Contoh: 500000" className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Order Date</label>
                <input type="date" className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none" />
              </div>

              <div className="flex gap-3 pt-4">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)} 
                  className="flex-1 py-3 text-gray-500 font-bold hover:bg-gray-100 rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="flex-1 py-3 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 shadow-lg shadow-green-200 transition-all"
                >
                  Save Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;