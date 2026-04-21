import { useState } from "react";
import PageHeader from "../components/PageHeader";

export default function Customers() {
  const [showForm, setShowForm] = useState(false);

  // Generate 30 Data JSON Dummy menggunakan AI/Logic JavaScript
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
    <div className="p-4">
      {/* 1. PageHeader Dinamis dengan Props */}
      <PageHeader title="Customer List" breadcrumb={["Home", "Customers"]}>
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition-colors shadow-md"
        >
          + Add Customer
        </button>
      </PageHeader>

      {/* 2. Tabel Data Customers */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-4 text-gray-600">Customer ID</th>
                <th className="p-4 text-gray-600">Name</th>
                <th className="p-4 text-gray-600">Email</th>
                <th className="p-4 text-gray-600">Phone</th>
                <th className="p-4 text-gray-600">Loyalty</th>
              </tr>
            </thead>
            <tbody>
              {customersData.map((customer) => (
                <tr key={customer.id} className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold text-gray-800">
                    {customer.id}
                  </td>
                  <td className="p-4 text-gray-700">{customer.name}</td>
                  <td className="p-4 text-gray-500">{customer.email}</td>
                  <td className="p-4 text-gray-500">{customer.phone}</td>
                  <td className="p-4">
                    {/* Badge Loyalty dengan warna dinamis */}
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        customer.loyalty === "Gold"
                          ? "bg-yellow-100 text-yellow-700"
                          : customer.loyalty === "Silver"
                            ? "bg-gray-200 text-gray-700"
                            : "bg-orange-100 text-orange-700" // Bronze
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

      {/* 3. Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl animate-in fade-in zoom-in duration-200">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Add New Customer
            </h2>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {/* TAMBAHAN: Input untuk Customer ID sesuai atribut JSON */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Customer ID
                </label>
                <input
                  type="text"
                  placeholder="CUST-1031"
                  className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Customer Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="08123456789"
                  className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Loyalty Tier
                </label>
                <select className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none bg-white">
                  <option value="Bronze">Bronze</option>
                  <option value="Silver">Silver</option>
                  <option value="Gold">Gold</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 py-3 bg-gray-100 text-gray-600 rounded-xl font-bold hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 shadow-lg shadow-green-200 transition-all active:scale-95"
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
