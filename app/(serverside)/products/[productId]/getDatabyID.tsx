import { notFound } from "next/navigation";
import React from "react";
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
const getDatabyID = async ({
  productId,
}: {
  productId: string;
}): Promise<ProductsProps> => {
    const response = await fetch ('https://dummyjson.com/products')
    if (!response.ok) {
        if (response.status === 404) {
          notFound();
        } else {
          throw new Error(`Failed to fetch data for product ID: ${productId}`);
        }
      }
    const data : ProductsProps = await response.json()
    return data;
};

export default getDatabyID;
