import styled from "styled-components";

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  border-bottom: 1px solid var(--clr-grey-9);
  padding: 1rem 0;

  .item-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .img {
    width: 5rem;
    height: 5rem;
    border-radius: var(--border-radius);
  }

  .name-container {
    text-align: center;
  }

  .name {
    font-weight: 700;
    margin-bottom: 0;
  }

  p {
    margin-top: 0;
    margin-bottom: 0;
    color: var(--text-color);
    line-height: 1.25;
    text-transform: capitalize;
  }

  .color-container {
    margin-top: 0.5rem;
    font-size: var(--text-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
  }

  .color {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    border: none;
  }

  .amount-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
  }

  .amount {
    font-size: 1rem;
  }

  .remove-btn {
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    color: var(--primary-color);
    letter-spacing: var(--letter-spacing-sm);
    padding: 0;
    cursor: pointer;
  }

  .remove-btn:hover {
    color: var(--primary-dark-color);
    border-color: var(--primary-color);
  }

  .price {
    font-weight: 700;
    min-width: 5rem;
    text-align: center;
  }

  @media (min-width: 500px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    gap: 1.5rem;

    .item-container {
      display: flex;
      flex-direction: row;
      gap: 1.5rem;
      align-items: start;
    }

    .name-container {
      text-align: left;
      width: 8rem;
    }

    .color-container {
      justify-content: flex-start;
    }

    .price {
      text-align: right;
    }
  }
`;

export default Wrapper;
