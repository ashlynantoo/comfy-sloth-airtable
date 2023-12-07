import styled from "styled-components";

const Wrapper = styled.section`
  h5 {
    color: var(--clr-green-light);
    font-weight: 700;
    text-transform: none;
  }

  form {
    align-self: center;
    background-color: var(--clr-grey-10);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-2);
    padding: 2.5rem;
    width: var(--view-width);
    max-width: 500px;
  }

  #payment-element {
    margin-bottom: 1.5rem;
  }

  button {
    font-size: var(--text-md);
    height: 2.5rem;
  }

  .spinner-text {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    text-transform: lowercase;
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .spinning {
    width: 1.2rem;
    height: 1.2rem;
    border: 3px solid var(--clr-white);
    border-radius: 50%;
    border-top-color: transparent;
    animation: spinner 0.7s linear infinite;
  }

  #payment-message {
    color: var(--clr-red-light);
    letter-spacing: var(--letter-spacing-sm);
    margin-top: 1rem;
    text-align: center;
  }
`;

export default Wrapper;
