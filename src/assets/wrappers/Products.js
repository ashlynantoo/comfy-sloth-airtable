import styled from "styled-components";

const Wrapper = styled.div`
  padding: 3rem 0;

  .products {
    display: grid;
  }

  @media (min-width: 992px) {
    .products {
      grid-template-columns: 200px 1fr;
      gap: 2rem;
    }
  }

  .products-container {
    display: grid;
    grid-template-rows: 2.25rem 1fr;
    gap: 2rem;
  }

  .search-form {
    margin: 0 auto;
    width: var(--view-width);
    max-width: 450px;
  }

  .form-input {
    font-size: 1rem;
    border: 2px solid var(--clr-black);
    height: 2.25rem;
  }

  .form-input:focus {
    outline: none;
    border: 2px solid var(--primary-color);
  }
`;

export default Wrapper;
