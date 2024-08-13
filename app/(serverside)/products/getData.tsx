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
interface ProductType {
  products: ProductsProps[];
}
const getData = async ({ page }: { page: number }) => {
  const pageSize = 24; //fetch 24item
  const pageNumber = page || 1;
  const response = await fetch(
    `https://dummyjson.com/products?limit=${pageSize}&skip=${
      (pageNumber - 1) * pageSize
    }`
  );

  const data = await response.json();
  const totalPage = Math.ceil(data.total / pageSize);
  return { products: data.products, totalPage };
};

export default getData;




