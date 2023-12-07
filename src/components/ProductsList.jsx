import { Link } from "react-router-dom";
import { formatPrice } from "../utils";
import Wrapper from "../assets/wrappers/ProductsList";

const ProductsList = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, image, name, price, description } = product;
        const dollarPrice = formatPrice(price);

        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h5 className="price">{dollarPrice}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link to={`/products/${id}`} className="btn">
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

export default ProductsList;
