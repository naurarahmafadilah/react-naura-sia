import {
  FaHome,
  FaClipboardList,
  FaUsers,
  FaExclamationTriangle,
  FaLock,
  FaUserSlash,
  FaBoxOpen,
  FaCogs, // Mengimpor ikon baru untuk Fitur XYZ
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  // Fungsi styling link aktif - Menggunakan emerald agar matching dengan UI detail
  const menuClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
      isActive
        ? "bg-emerald-100 text-emerald-600 font-bold shadow-sm"
        : "text-gray-500 hover:bg-emerald-50 hover:text-emerald-600 font-medium"
    }`;

  return (
    <div className="w-64 bg-white min-h-screen shadow-sm flex flex-col justify-between border-r sticky top-0 h-screen font-barlow">
      
      {/* ===== TOP SECTION: LOGO & MENU ===== */}
      <div>
        {/* LOGO */}
        <div className="px-6 py-6 border-b border-gray-50">
          <h1 className="text-2xl font-poppins font-black tracking-tight text-gray-800">
            Sedap<span className="text-emerald-500">.</span>
          </h1>
          <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mt-1">
            Modern Admin Dashboard
          </p>
        </div>

        {/* NAVIGATION LINKS */}
        <nav className="px-4 py-6 space-y-1">
          
          <NavLink to="/" className={menuClass}>
            <FaHome size={18} />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/orders" className={menuClass}>
            <FaClipboardList size={18} />
            <span>Orders</span>
          </NavLink>

          <NavLink to="/product" className={menuClass}>
            <FaBoxOpen size={18} />
            <span>Product</span>
          </NavLink>

          <NavLink to="/customers" className={menuClass}>
            <FaUsers size={18} />
            <span>Customers</span>
          </NavLink>

          {/* MENU BARU: FITUR XYZ */}
          <NavLink to="/fitur-xyz" className={menuClass}>
            <FaCogs size={18} />
            <span>Fitur XYZ</span>
          </NavLink>

          {/* SECTION TITLE */}
          <div className="pt-8 pb-3 text-[10px] font-black text-gray-400 uppercase px-4 tracking-[0.2em]">
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

      {/* ===== BOTTOM SECTION: PROMO CARD ===== */}
      <div className="p-4 space-y-4">
        
        {/* PROMO CARD - Menggunakan Emerald Gradient agar mewah */}
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-5 rounded-[2rem] shadow-xl shadow-emerald-100 relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-xs mb-4 leading-relaxed font-medium opacity-90">
              Organize your menu easily with one click.
            </p>
            <button className="bg-white text-emerald-600 w-full py-2.5 rounded-xl font-black text-xs uppercase tracking-wider hover:bg-gray-50 transition-colors shadow-sm">
              + Add Menu
            </button>
          </div>
          {/* Dekorasi lingkaran di card */}
          <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-white/10 rounded-full"></div>
        </div>

        {/* COPYRIGHT */}
        <div className="text-center pt-2 pb-4">
          <h2 className="text-xs font-bold text-gray-700 font-poppins">
            Sedap Restaurant Admin
          </h2>
          <p className="text-[9px] text-gray-400 mt-1 uppercase tracking-widest font-bold">
            © 2026 v.1.0.4
          </p>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;