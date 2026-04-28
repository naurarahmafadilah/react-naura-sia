import { FaBell, FaEnvelope, FaCog, FaSearch } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <div className="flex items-center justify-between bg-white px-6 py-4 shadow-sm">

        {/* SEARCH MODERN */}
        <div className="relative w-1/3">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            onClick={() => setOpen(true)}
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 bg-gray-50 
            focus:bg-white focus:border-green-400 focus:ring-2 focus:ring-green-100 
            hover:shadow-sm outline-none transition-all"
          />
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-5">

          {/* NOTIF */}
          <div className="relative">
            <FaBell className="text-gray-500 text-xl cursor-pointer hover:text-green-500 transition" />
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1.5 rounded-full">
              5
            </span>
          </div>

          {/* EMAIL */}
          <FaEnvelope className="text-gray-500 text-xl cursor-pointer hover:text-green-500 transition" />

          {/* SETTINGS */}
          <FaCog className="text-gray-500 text-xl cursor-pointer hover:text-green-500 transition" />

          {/* PROFILE */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm font-semibold text-gray-700">
              Naura Rahma
            </span>
          </div>
        </div>
      </div>

      {/* MODAL SEARCH */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white p-6 rounded-xl w-[400px] shadow-xl animate-in fade-in zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Search
            </h2>

            <input
              type="text"
              placeholder="Type something..."
              className="border w-full px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-400"
            />

            <button
              onClick={() => setOpen(false)}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg w-full hover:bg-green-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;