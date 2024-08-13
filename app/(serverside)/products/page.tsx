import ProductList from "../components/ProductList";
type SearchParams = {
  page: number;
};

const Products = async ({ searchParams }: { searchParams: SearchParams }) => {
  const currentPage = searchParams?.page || 1
  return (
    <>
      <ProductList page={currentPage} />
    </>
  );
};
export default Products;
