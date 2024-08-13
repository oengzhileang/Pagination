import React from "react";
import Image from "next/image";
interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  price: string;
  discountPercentage: string;
  rating: string;
  thumbnail: string;
}
interface  ProductCardProps{
    item : Product;
}
const ProductCard : React.FC <ProductCardProps> = ({item}) => {
  return (
    <>
        <div className="">
          <div
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            key={item.id}
          >
            <a href="#" className="flex items-center justify-center">
              <Image
                src={item.thumbnail}
                alt=""
                width={150}
                height={150}
              ></Image>
            </a>
            <div className="px-5 pb-5">
              <a href="#">  
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
              </a>
              <div className="flex items-center mt-2.5 mb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  {/* Star Rating SVGs */}
                  {/* Add SVGs here */}
                  {item.category}
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                  {item.rating}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${item.price}
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
  )
};

export default ProductCard;
