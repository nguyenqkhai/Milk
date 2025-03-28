import React from "react";

const Product = () => {
  const products = [
    {
      id: 1,
      name: "Sữa Vinamilk",
      price: 30000,
      discount: 25,
      image:
        "https://upload.mybota.vn/upload/web/50/508613/product/2023/06/15/10/57/168682664842.png",
    },
    {
      id: 2,
      name: "Sữa TH True Milk",
      price: 32000,
      discount: 0,
      image:
        "https://upload.mybota.vn/upload/web/50/508613/product/2023/06/15/10/57/168682664842.png",
    },
    {
      id: 3,
      name: "Sữa Dutch Lady",
      price: 28000,
      discount: 10,
      image:
        "https://upload.mybota.vn/upload/web/50/508613/product/2023/06/15/10/57/168682664842.png",
    },
    {
      id: 4,
      name: "Sữa LothaMilk",
      price: 28000,
      discount: 0,
      image:
        "https://upload.mybota.vn/upload/web/50/508613/product/2023/06/15/10/57/168682664842.png",
    },
    {
      id: 5,
      name: "Sữa Vinamilk",
      price: 30000,
      discount: 25,
      image:
        "https://upload.mybota.vn/upload/web/50/508613/product/2023/06/15/10/57/168682664842.png",
    },
    {
      id: 6,
      name: "Sữa TH True Milk",
      price: 32000,
      discount: 0,
      image:
        "https://upload.mybota.vn/upload/web/50/508613/product/2023/06/15/10/57/168682664842.png",
    },
    {
      id: 7,
      name: "Sữa Dutch Lady",
      price: 28000,
      discount: 10,
      image:
        "https://upload.mybota.vn/upload/web/50/508613/product/2023/06/15/10/57/168682664842.png",
    },
    {
      id: 8,
      name: "Sữa LothaMilk",
      price: 28000,
      discount: 0,
      image:
        "https://upload.mybota.vn/upload/web/50/508613/product/2023/06/15/10/57/168682664842.png",
    },
    {
      id: 9,
      name: "Sữa Vinamilk",
      price: 30000,
      discount: 25,
      image:
        "https://upload.mybota.vn/upload/web/50/508613/product/2023/06/15/10/57/168682664842.png",
    },
    {
      id: 10,
      name: "Sữa TH True Milk",
      price: 32000,
      discount: 0,
      image:
        "https://upload.mybota.vn/upload/web/50/508613/product/2023/06/15/10/57/168682664842.png",
    },
    {
      id: 11,
      name: "Sữa Dutch Lady",
      price: 28000,
      discount: 10,
      image:
        "https://upload.mybota.vn/upload/web/50/508613/product/2023/06/15/10/57/168682664842.png",
    },
    {
      id: 12,
      name: "Sữa LothaMilk",
      price: 28000,
      discount: 0,
      image:
        "https://upload.mybota.vn/upload/web/50/508613/product/2023/06/15/10/57/168682664842.png",
    },
  ];

  return (
    <div className="grid grid-cols-5 gap-x-4 gap-y-6 mt-25 m-5">
      {products.map((product) => {
        const discountedPrice = product.discount
          ? product.price - (product.price * product.discount) / 100
          : product.price;

        return (
          <div
            key={product.id}
            className="border rounded-lg shadow-md p-4 bg-white cursor-pointer hover:shadow-xl hover:scale-105 transition-transform duration-400 hover:-translate-y-2 hover:border-blue-500 flex flex-col justify-between h-full"
          >
            <img
              src={product.image}
              className="rounded-xl w-full object-cover aspect-[4/3]"
              alt={product.name}
            />

            <div className="flex flex-col flex-grow">
              <h2 className=" text-lg font-semibold">{product.name}</h2>

              <div className="flex-grow min-h-[60px] flex flex-col justify-center">
                {product.discount > 0 ? (
                  <div>
                    <p className="text-red-600 text-xl font-bold">
                      {discountedPrice.toLocaleString()} VNĐ
                    </p>
                    <div className="flex item-align-center gap-2">
                      <p className="text-gray-500 line-through text-sm">
                        {product.price.toLocaleString()} VNĐ
                      </p>
                      <p className="text-red-500 text-sm font-bold">
                        {" "}
                        - {product.discount}%
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-700 text-xl font-bold">
                    {product.price.toLocaleString()} VNĐ
                  </p>
                )}
              </div>
            </div>

            <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg cursor-pointer">
              Mua ngay
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
