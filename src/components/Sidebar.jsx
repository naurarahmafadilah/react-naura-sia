import {
  FaHome,
  FaClipboardList,
  FaFileAlt,
  FaExclamationTriangle,
  FaLock,
  FaUserSlash,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
      isActive
        ? "bg-green-100 text-green-600 font-semibold"
        : "text-gray-600 hover:bg-green-50 hover:text-green-600"
    }`;

  return (
    <div className="w-64 bg-white min-h-screen shadow-sm flex flex-col justify-between">

      {/* ===== TOP SECTION ===== */}
      <div>
        {/* LOGO */}
        <div className="px-6 py-5 border-b">
          <h1 className="text-2xl font-bold">
            Sedap<span className="text-green-500">.</span>
          </h1>
          <p className="text-gray-400 text-xs">
            Modern Admin Dashboard
          </p>
        </div>

        {/* MENU */}
        <nav className="px-4 py-4 space-y-2">

          <NavLink to="/" className={menuClass}>
            <FaHome size={18} />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/orders" className={menuClass}>
            <FaClipboardList size={18} />
            <span>Orders</span>
          </NavLink>

          <NavLink to="/customers" className={menuClass}>
            <FaFileAlt size={18} />
            <span>Customers</span>
          </NavLink>

          {/* TITLE */}
          <div className="pt-4 text-xs font-semibold text-gray-400 uppercase px-2">
            Error Pages
          </div>

          <NavLink to="/400" className={menuClass}>
            <FaExclamationTriangle size={18} />
            <span>Error 400</span>
          </NavLink>

          <NavLink to="/401" className={menuClass}>
            <FaUserSlash size={18} />
            <span>Error 401</span>
          </NavLink>

          <NavLink to="/403" className={menuClass}>
            <FaLock size={18} />
            <span>Error 403</span>
          </NavLink>

        </nav>
      </div>

      {/* ===== BOTTOM SECTION ===== */}
      <div className="p-4 space-y-4">

        {/* CARD */}
        <div className="bg-green-500 text-white p-5 rounded-2xl">
          <p className="text-sm mb-4 leading-relaxed">
            Organize your menu easily with one click.
          </p>
          <button className="bg-white text-green-500 w-full py-2 rounded-xl font-semibold hover:bg-gray-100 transition">
            + Add Menu
          </button>
        </div>

        {/* COPYRIGHT */}
        <div className="text-center border-t pt-4">
          <h2 className="text-sm font-bold text-gray-700">
            Sedap Restaurant Admin
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            © 2025 All Rights Reserved
          </p>
        </div>

      </div>

    </div>
  );
};

export default Sidebar;