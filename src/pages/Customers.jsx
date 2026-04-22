import { useState } from "react";
import PageHeader from "../components/PageHeader";

export default function Customers() {
  const [showForm, setShowForm] = useState(false);

  const customersData = Array.from({ length: 30 }, (_, i) => {
    const loyalties = ["Bronze", "Silver", "Gold"];
    return {
      id: `CUST-${1000 + i}`,
      name: `Customer ${i + 1}`,
      email: `customer${i + 1}@example.com`,
      phone: `081234567${i.toString().padStart(3, "0")}`,
      loyalty: loyalties[Math.floor(Math.random() * loyalties.length)],
    };
  });

  return (
    <div className="p-6">
      
      {/* HEADER */}
      <PageHeader title="Customer List" breadcrumb={["Home", "Customers"]}>
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition shadow-sm"
        >
          + Add Customer
        </button>
      </PageHeader>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden mt-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            
            {/* HEAD */}
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-4 text-sm font-semibold text-gray-600">Customer ID</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Name</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Email</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Phone</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Loyalty</th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {customersData.map((customer) => (
                <tr
                  key={customer.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-4 font-medium text-gray-800">
                    {customer.id}
                  </td>
                  <td className="p-4 text-gray-700">{customer.name}</td>
                  <td className="p-4 text-gray-500">{customer.email}</td>
                  <td className="p-4 text-gray-500">{customer.phone}</td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        customer.loyalty === "Gold"
                          ? "bg-yellow-100 text-yellow-700"
                          : customer.loyalty === "Silver"
                          ? "bg-gray-200 text-gray-700"
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

      {/* MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">

            <h2 className="text-xl font-bold mb-5 text-gray-800">
              Add Customer
            </h2>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

              <input
                type="text"
                placeholder="Customer ID"
                className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
              />

              <input
                type="text"
                placeholder="Customer Name"
                className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
              />

              <input
                type="tel"
                placeholder="Phone"
                className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
              />

              <select className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none">
                <option>Bronze</option>
                <option>Silver</option>
                <option>Gold</option>
              </select>

              <div className="flex gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
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
}