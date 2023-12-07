import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { customFetch, formatPrice } from "../utils";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import Wrapper from "../assets/wrappers/SingleProduct";
import {
  AmountButtons,
  Path,
  ProductImages,
  ProductRating,
} from "../components";

const singleProductQuery = (productId) => {
  return {
    queryKey: ["singleProduct", productId],
    queryFn: () => {
      const url = `/react-store-single-product?id=${productId}`;
      return customFetch(url);
    },
  };
};

export const loader = (queryClient) => {
  return async ({ params }) => {
    const { id } = params;
    const { data: product } = await queryClient.ensureQueryData(
      singleProductQuery(id)
    );
    return product;
  };
};

const SingleProduct = () => {
  const product = useLoaderData();
  const {
    id,
    images,
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    colors,
    company,
  } = product;
  const dollarPrice = formatPrice(price);

  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increaseAmount = () => {
    let newAmount = amount + 1;
    if (newAmount > stock) {
      newAmount = stock;
    }
    setAmount(newAmount);
  };

  const decreaseAmount = () => {
    let newAmount = amount - 1;
    if (newAmount < 1) {
      newAmount = 1;
    }
    setAmount(newAmount);
  };

  const cartItem = {
    id: id + productColor,
    name,
    image: images[0].url,
    price,
    color: productColor,
    amount,
    max: stock,
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCart = () => {
    dispatch(addItem(cartItem));
    navigate("/cart");
  };

  return (
    <Wrapper>
      <Path title={name} product />
      <div className="section section-center page">
        <div className="product-center">
          <ProductImages images={images} />
          <section className="content">
            <h3>{name}</h3>
            <ProductRating stars={stars} reviews={reviews} />
            <h5 className="price">{dollarPrice}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available : </span>
              {stock > 0 ? "In stock" : "Out of stock"}
            </p>
            <p className="info">
              <span>SKU :</span>
              {id}
            </p>
            <p className="info">
              <span>Brand :</span>
              {company}
            </p>
            {stock > 0 && (
              <div>
                <hr />
                <div className="info spacing">
                  <span>Colors :</span>
                  <div className="colors">
                    {colors.map((color, index) => {
                      return (
                        <button
                          key={index}
                          type="button"
                          style={{ background: color }}
                          className="color-btn"
                          onClick={() => {
                            setProductColor(color);
                          }}
                        >
                          {productColor === color ? <FaCheck /> : null}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className="info spacing">
                  <span>Amount :</span>
                  <AmountButtons
                    increaseAmount={increaseAmount}
                    decreaseAmount={decreaseAmount}
                    amount={amount}
                  />
                </div>
                <button className="btn" onClick={addToCart}>
                  Add to cart
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleProduct;
