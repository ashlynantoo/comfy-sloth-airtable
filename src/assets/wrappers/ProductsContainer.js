import styled from "styled-components";

const Wrapper = styled.section`
  .products-info {
    display: grid;
    margin-bottom: 2rem;
    gap: 1rem;
  }

  .info {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 2rem;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;

    button {
      background: transparent;
      border: 1px solid var(--clr-black);
      color: var(--clr-black);
      height: 2rem;
      border-radius: var(--border-radius);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      svg {
        font-size: 1.25rem;
      }
    }

    .active {
      background: var(--clr-black);
      color: var(--clr-white);
    }
  }

  p {
    margin: 0;
    justify-self: end;
  }

  .filter {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1rem;
    align-items: center;
  }

  label {
    display: inline-block;
  }

  .sort-input {
    border-color: transparent;
    padding: 0.25rem;
  }

  .filter-btn {
    display: block;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    letter-spacing: var(--letter-spacing-sm);
    color: var(--primary-color);
    cursor: pointer;
  }

  .filter-btn:hover {
    color: var(--primary-dark-color);
  }

  @media (min-width: 768px) {
    .products-info {
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
    }

    p {
      justify-self: start;
    }
  }

  @media (min-width: 992px) {
    .filter {
      grid-template-columns: 1fr;
    }

    form {
      justify-self: end;
    }

    .filter-btn {
      display: none;
    }
  }

  h5 {
    text-transform: none;
    font-weight: 700;
  }
`;

export default Wrapper;
