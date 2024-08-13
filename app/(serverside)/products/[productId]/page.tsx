import React from "react";
import getDatabyID from "./getDatabyID";
import Image from "next/image";
interface ProductDetailProps {
  params: { productId: string };
}
const ProductDetail: React.FC<ProductDetailProps> = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const product = await getDatabyID(params.productId);
  // console.log(product); //show item in terminal
  return (
    <>
      <div className="flex justify-center items-center">
        <div
          className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          key={product.id}
        >
          <a href="#" className="flex items-center justify-center">
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={150}
              height={150}
            ></Image>
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {product.title}
              </h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                {/* Star Rating SVGs */}
                {/* Add SVGs here */}
                {product.category}
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                {product.rating}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${product.price}
              </span>
              <a
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
