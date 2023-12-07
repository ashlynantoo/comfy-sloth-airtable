import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { formatPrice } from "../utils";
import Wrapper from "../assets/wrappers/ProductsGrid";

const ProductsGrid = ({ products }) => {
  return (
    <Wrapper>
      <div className="products-grid">
        {products.map((product) => {
          const { id, image, name, price } = product;
          const dollarPrice = formatPrice(price);

          return (
            <article key={id}>
              <div className="img-container">
                <img src={image} alt={name} />
                <Link to={`/products/${id}`} className="link">
                  <FaSearch />
                </Link>
              </div>
              <footer>
                <h5>{name}</h5>
                <p>{dollarPrice}</p>
              </footer>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default ProductsGrid;
