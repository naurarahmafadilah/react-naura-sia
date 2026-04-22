import { Link } from "react-router-dom";
import { FaHeadset, FaUndo } from "react-icons/fa";

const ErrorPage = ({ code, title, description, image }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] text-center px-4">

      {/* IMAGE */}
      <img
        src={image}
        alt="error"
        className="w-48 md:w-56 mb-6 object-contain"
      />

      {/* CODE */}
      <h1 className="text-7xl font-bold text-gray-300">
        {code}
      </h1>

      {/* TITLE */}
      <h2 className="text-2xl font-semibold mt-2 text-gray-800">
        {title}
      </h2>

      {/* DESC */}
      <p className="text-gray-500 mt-2 mb-6 max-w-md text-sm">
        {description}
      </p>

      {/* BUTTON */}
      <div className="flex gap-3 flex-wrap justify-center">

        <Link
          to="/"
          className="flex items-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-green-600 transition"
        >
          <FaUndo /> Kembali
        </Link>

        <button
          onClick={() => window.open("https://wa.me/628xxxxxxxxxx")}
          className="flex items-center gap-2 border border-green-500 text-green-500 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-green-50 transition"
        >
          <FaHeadset /> Bantuan
        </button>

      </div>
    </div>
  );
};

export default ErrorPage;