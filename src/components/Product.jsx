import React from "react";

const Product = () => {
  return (
    <div className="min-h-screen bg-white py-10 px-6">
      <h1 className="text-4xl font-bold text-gray-900 text-center">
        Sản phẩm của chúng tôi
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <img
            src="https://upload.mybota.vn/upload/web/50/508613/product/2023/06/15/10/57/168682664842.png"
            alt="Milk"
            className="w-60 h-60 object-cover rounded-md mx-auto"
          />
          <h2 className="text-xl font-semibold text-gray-800 mt-3">
            Sữa tươi nguyên chất
          </h2>
          <p className="text-gray-600">100% nguyên chất từ trang trại.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Mua ngay
          </button>
        </div>

        <div className="bg-white p-4 shadow-lg rounded-lg">
          <img
            src="https://upload.mybota.vn/upload/web/50/508613/product/2023/06/15/10/57/168682664842.png"
            alt="Milk"
            className="w-60 h-60 object-cover rounded-md mx-auto"
          />
          <h2 className="text-xl font-semibold text-gray-800 mt-3">
            Sữa hạt dinh dưỡng
          </h2>
          <p className="text-gray-600">Bổ sung dinh dưỡng từ thiên nhiên.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Mua ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
