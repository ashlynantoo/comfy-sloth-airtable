import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/FeaturedProducts";
import { SectionTitle, ProductsGrid } from "../components";

const FeaturedProducts = () => {
  const { featuredProducts } = useSelector((store) => {
    return store.productsState;
  });

  return (
    <Wrapper>
      <div className="section section-center">
        <SectionTitle title="featured products" />
        <ProductsGrid products={featuredProducts} />
        <div className="btn-container">
          <Link to="/products" className="btn">
            all products
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default FeaturedProducts;
