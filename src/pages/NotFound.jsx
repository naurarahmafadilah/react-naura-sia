// src/pages/ErrorPage.jsx
import { Link } from "react-router-dom";
import { FaHeadset, FaUndo } from "react-icons/fa"; // Pastikan sudah install react-icons

const ErrorPage = ({ code, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-9xl font-extrabold text-green-200">{code}</h1>
      <h2 className="text-3xl font-bold mt-4 text-gray-800">{title}</h2>
      <p className="text-gray-500 mt-2 mb-8 max-w-sm">{description}</p>
      
      <div className="flex gap-4">
        <Link 
          to="/" 
          className="flex items-center gap-2 bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600 transition-all font-bold shadow-md active:scale-95"
        >
          <FaUndo /> Kembali
        </Link>
        
        <button 
          onClick={() => window.open('https://wa.me/yournumber', '_blank')}
          className="flex items-center gap-2 border-2 border-green-500 text-green-500 px-6 py-2 rounded-xl hover:bg-green-50 transition-all font-bold active:scale-95"
        >
          <FaHeadset /> Hubungi Bantuan
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;