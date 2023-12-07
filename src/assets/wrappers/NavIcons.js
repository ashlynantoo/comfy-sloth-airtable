import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 0.25rem;

  .cart-btn {
    font-size: 1.25rem;
    letter-spacing: var(--letter-spacing-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    cursor: pointer;
  }

  .cart-container {
    display: flex;
    align-items: center;
    position: relative;

    svg {
      font-size: 1.5rem;
    }
  }

  .cart-value {
    position: absolute;
    top: -12px;
    right: -17px;
    background: var(--primary-color);
    color: var(--clr-white);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--text-sm);
    letter-spacing: var(--letter-spacing-sm);
    padding: 0.75rem;
  }

  .auth-btn {
    font-size: 1.25rem;
    letter-spacing: var(--letter-spacing-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    background: transparent;
    border-color: transparent;
    cursor: pointer;

    svg {
      font-size: 1.5rem;
    }
  }
`;

export default Wrapper;
