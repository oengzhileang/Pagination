import React from "react";
import getData from "../products/getData";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import Link from "next/link";
interface ProductsProps {
  id: string;
  title: string;
  description: string;
  category: string;
  price: string;
  discountPercentage: string;
  rating: string;
  thumbnail: string;
  total: number;
}
const ProductList = async ({ page }: { page: number }) => {
  const { products, totalPage } = await getData({ page });
  // console.log(products);
  return (
    <>
      <div className="grid grid-cols-4 max-w-[1200] w-full gap-5">
        {products.map((item: ProductsProps) => (
          <div key={item.id}>
            <Link href={`products/${item.id}`}>
              <ProductCard item={item} />
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center my-10 h-[70px]">
        <Pagination totalPage={totalPage} currentPage={page} />
      </div>
    </>
  );
};

export default ProductList;
