import styled from "styled-components";

const Wrapper = styled.section`
  display: none;

  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
      font-weight: 700;
      color: var(--primary-dark-color);
    }
  }

  button {
    display: block;
    margin: 0.25rem 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--letter-spacing-sm);
    color: var(--para-color);
    cursor: pointer;
  }

  .active {
    color: var(--primary-dark-color);
    border-color: var(--primary-color);
  }

  .colors {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 0.6rem;
      color: var(--clr-white);
    }
  }

  .price {
    margin-top: 0;
    margin-bottom: 0.25rem;
  }

  .range {
    accent-color: var(--primary-color);
  }

  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 1rem;
  }

  .label {
    font-size: 1rem;
    color: var(--para-color);
    letter-spacing: var(--letter-spacing-sm);
    text-transform: capitalize;
  }

  .checkbox {
    accent-color: var(--primary-color);
    justify-self: start;
    width: 1rem;
    height: 1rem;
  }

  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    letter-spacing: var(--letter-spacing-lg);
    padding: 0.375rem 0.75rem;
  }

  @media (min-width: 992px) {
    display: block;

    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Wrapper;
