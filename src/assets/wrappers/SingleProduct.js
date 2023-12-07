import styled from "styled-components";

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 3rem;
  }

  h3 {
    font-weight: 700;
  }

  .price {
    color: var(--primary-color);
    font-weight: 700;
  }

  .desc {
    max-width: 45em;
  }

  .info {
    display: grid;
    grid-template-columns: 100px 1fr;
    align-items: center;
    color: var(--text-color);

    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }

    .price {
      font-size: 1.2rem;
    }
  }

  .spacing {
    margin-top: 1rem;
  }

  .colors {
    display: flex;
    gap: 0.5rem;
  }

  .color-btn {
    display: inline-block;
    width: 1.35rem;
    height: 1.35rem;
    border-radius: 50%;
    background: #222;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }

  .btn {
    margin-top: 1.5rem;
  }
`;

export default Wrapper;
