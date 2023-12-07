import styled from "styled-components";

const Wrapper = styled.section`
  .modal {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    height: auto;
    background: var(--clr-grey-10);
    transition: var(--transition);
    transform: translate(0, 100%);
    z-index: -1;
  }

  .show-modal {
    transform: translate(0);
    z-index: 99;
  }

  .content {
    padding: 1.5rem;
  }

  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
      font-weight: 700;
      color: var(--primary-dark-color);
    }
  }

  .btn-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  button {
    display: inline-block;
    padding: 0.25rem;
    text-transform: capitalize;
    background: var(--primary-light-color);
    color: var(--primary-dark-color);
    border: none;
    letter-spacing: var(--letter-spacing-sm);
    cursor: pointer;
  }

  .active {
    color: var(--clr-white);
    background: var(--primary-color);
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

  .price-container {
    margin-bottom: 0.2rem;
  }

  .price-container h5 {
    margin-bottom: 0.2rem;
  }

  .price {
    margin-top: 0;
    margin-bottom: 0;
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
    letter-spacing: var(--letter-spacing-sm);
    padding: 0.375rem 0.75rem;
  }

  .close-btn {
    background: var(--primary-color);
    color: var(--clr-white);
    letter-spacing: var(--letter-spacing-sm);
    padding: 0.375rem 0.75rem;
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

export default Wrapper;
