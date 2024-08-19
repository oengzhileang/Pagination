import ProductList from "../../components/organisms/ProductList";
import { Suspense } from "react";
import Skeleton from "../../components/organisms/Skeleton";
type SearchParams = {
  page: number;
};

const Products = async ({ searchParams }: { searchParams: SearchParams }) => {
  const currentPage = searchParams?.page || 1;
  return (
    <>
      <Suspense fallback={<Skeleton />}>
        <ProductList page={currentPage} />
      </Suspense>
    </>
  );
};
export default Products;
