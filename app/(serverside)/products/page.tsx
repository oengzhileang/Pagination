import ProductList from "../components/ProductList";
type SearchParams = {
  page: number;
};

const Products = async ({ searchParams }: { searchParams: SearchParams }) => {
  // const page = searchParams['page'] ?? '1'
  // const per_page = searchParams['per_page'] ?? '5'
  // const start = (Number(page-1) * Number(per_page)) // 0,5,10
  // const end = start + Number(per_page) //5,10,15
  // console.log(searchParams.page);
  const currentPage = searchParams?.page
  return (
    <>
      <ProductList page={currentPage} />
    </>
  );
};
export default Products;
