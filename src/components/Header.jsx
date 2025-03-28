import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center px-8 fixed top-0 left-0 w-full z-50">
      <h1 className="text-3xl font-extrabold text-blue-700 tracking-wide">
        Milk Store 🥛
      </h1>

      <nav className="flex gap-4">
        <Link
          to="/"
          className="text-gray-700 font-medium text-lg hover:text-blue-600 transition duration-200"
        >
          Trang chủ
        </Link>
        <Link
          to="/product"
          className="text-gray-700 font-medium text-lg hover:text-blue-600 transition duration-200"
        >
          Sản phẩm
        </Link>
        <Link
          to="/about"
          className="text-gray-700 font-medium text-lg hover:text-blue-600 transition duration-200"
        >
          Về chúng tôi
        </Link>
      </nav>

      <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:scale-105 transition duration-300">
        🛒 Giỏ hàng
      </button>
    </header>
  );
};

export default Header;
