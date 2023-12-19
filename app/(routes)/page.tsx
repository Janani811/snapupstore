import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

import Billboard from "@/components/billboard";
import ProductList from "@/components/products-list";
import Container from "@/components/ui/container";

const Home = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboards = await getBillboard("310ed51a-1be3-43ea-8225-9e21ffbe30c9");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboards} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default Home;
