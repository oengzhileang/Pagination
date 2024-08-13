"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ProductListProps {
  id: string;
  title: string;
  description: string;
  category: string;
  price: string;
  discountPercentage: string;
  rating: string;
  thumbnail: string;
}

const ProductList = () => {
  const [data, setData] = useState<ProductListProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products?limit=10&skip=${(currentPage - 1) * 10} `
        );
        const responseData = await response.json();
        setData((prevData) => [...prevData, ...responseData.products]);
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching data", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  if (isLoading) return <p className="flex justify-center items-center font-semibold text-5xl mt-5 ">Loading</p>;
  if (!data) return <p>No data</p>;

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  return (
    <>
      <div className="grid grid-cols-4 max-w-[1200] w-full gap-5">
        {data.map((product) => (
          <div
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            key={product.id}
          >
            <a href="#" className="flex items-center justify-center">
              <Image
                src={product.thumbnail}
                alt=""
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
        ))}
      </div>
      <div className="flex justify-center items-center text-center mt-10">
        <button
          className="bg-blue-500 text-white px-8 py-4 rounded-lg"
          onClick={handleLoadMore}
        >
          Load more
        </button>
      </div>
    </>
  );
};

export default ProductList;
