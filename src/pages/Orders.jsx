import { useState } from "react";
import PageHeader from "../components/PageHeader";

const Orders = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const orders = Array.from({ length: 30 }, (_, i) => ({
    id: `ORD-${1000 + i}`,
    customer: `User ${i + 1}`,
    status: ["Pending", "Completed", "Cancelled"][Math.floor(Math.random() * 3)],
    total: Math.floor(Math.random() * 1000000),
    date: "2024-03-20",
  }));

  return (
    <div className="p-6">

      {/* HEADER */}
      <PageHeader title="Order List" breadcrumb={["Home", "Orders"]}>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition shadow-sm"
        >
          + Add Orders
        </button>
      </PageHeader>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden mt-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left">

            {/* HEAD */}
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-4 text-sm font-semibold text-gray-600">Order ID</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Customer</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Status</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Total</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Date</th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-4 font-medium text-gray-800">{order.id}</td>
                  <td className="p-4 text-gray-700">{order.customer}</td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        order.status === "Completed"
                          ? "bg-green-100 text-green-600"
                          : order.status === "Pending"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td className="p-4 font-medium text-gray-800">
                    Rp {order.total.toLocaleString()}
                  </td>

                  <td className="p-4 text-gray-500 text-sm">{order.date}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">

            <h2 className="text-xl font-bold mb-5 text-gray-800">
              Add Order
            </h2>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

              <input
                type="text"
                placeholder="Order ID"
                className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
              />

              <input
                type="text"
                placeholder="Customer Name"
                className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
              />

              <select className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none">
                <option>Pending</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>

              <input
                type="number"
                placeholder="Total Price"
                className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
              />

              <input
                type="date"
                className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
              />

              <div className="flex gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-3 bg-gray-100 text-gray-600 rounded-xl font-semibold hover:bg-gray-200"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="flex-1 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 shadow-sm"
                >
                  Save
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