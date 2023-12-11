import { Contact, FeaturedProducts, Hero, Services } from "../components";
import { filterFeaturedProducts } from "../features/products/productsSlice";
import { customFetch } from "../utils";

const url = "/products";

const productsQuery = {
  queryKey: ["products"],
  queryFn: () => {
    return customFetch(url);
  },
};

export const loader = (queryClient, store) => {
  return async () => {
    const { data: products } = await queryClient.ensureQueryData(productsQuery);
    store.dispatch(filterFeaturedProducts(products));
    return { products };
  };
};

const Landing = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default Landing;
