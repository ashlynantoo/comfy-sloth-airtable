import { useDispatch, useSelector } from "react-redux";
import { ProductsGrid, ProductsList } from "../components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import Wrapper from "../assets/wrappers/ProductsContainer";
import {
  openFiltersModal,
  setGridView,
  setListView,
  sortProducts,
} from "../features/products/productsSlice";

const ProductsContainer = () => {
  const dispatch = useDispatch();
  const { gridView, filteredProducts, sort } = useSelector((store) => {
    return store.productsState;
  });

  return (
    <Wrapper>
      <div className="products-info">
        <div className="info">
          <div className="btn-container">
            <button
              type="button"
              onClick={() => {
                dispatch(setGridView());
              }}
              className={gridView ? "active" : null}
            >
              <BsFillGridFill />
            </button>
            <button
              type="button"
              onClick={() => {
                dispatch(setListView());
              }}
              className={!gridView ? "active" : null}
            >
              <BsList />
            </button>
          </div>
          <p>
            {filteredProducts.length} product
            {filteredProducts.length > 1 && "s"} found
          </p>
        </div>
        <div className="filter">
          <form>
            <label htmlFor="sort">Sort by</label>
            <select
              name="sort"
              id="sort"
              value={sort}
              onChange={(event) => {
                dispatch(sortProducts(event.target.value));
              }}
              className="sort-input"
            >
              <option value="price-lowest">Price : Low to High</option>
              <option value="price-highest">Price : High to Low</option>
              <option value="name-a">Name (A - Z)</option>
              <option value="name-z">Name (Z - A)</option>
            </select>
          </form>
          <button
            type="button"
            onClick={() => {
              dispatch(openFiltersModal());
            }}
            className="filter-btn"
          >
            filter
          </button>
        </div>
      </div>
      <div>
        {filteredProducts.length === 0 ? (
          <h5>Sorry, no products matched your search criteria.</h5>
        ) : gridView ? (
          <ProductsGrid products={filteredProducts} />
        ) : (
          <ProductsList products={filteredProducts} />
        )}
      </div>
    </Wrapper>
  );
};

export default ProductsContainer;
