
interface ProductsProps {
    id: string;
    title: string;
    description: string;
    category: string;
    price: string;
    discountPercentage: string;
    rating: string;
    thumbnail: string;
}
interface ProductType{
    products : ProductsProps[]
}
const getData = async ()   => {
  const response = await fetch("https://dummyjson.com/products?limit=100");
  if(!response.ok){
    throw new Error ("Error fetching data")
  }
  const data : ProductType  = await response.json();
  return { products : data.products}
};

export default getData;
