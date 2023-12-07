import styled from "styled-components";

const Wrapper = styled.section`
  h3 {
    text-transform: none;
    text-align: center;
  }

  p {
    max-width: 45em;
    margin: 0 auto;
  }

  .contact-form {
    margin: 0 auto;
    margin-top: 2rem;
    width: var(--view-width);
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    border: 2px solid var(--clr-black);
    height: 2.25rem;
    padding: 0.375rem 0.75rem;
  }

  .form-input {
    border-right: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .form-input::placeholder {
    color: var(--para-color);
  }

  .submit-btn {
    cursor: pointer;
    color: var(--clr-black);
    background: var(--primary-color);
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    letter-spacing: var(--letter-spacing-lg);
    transition: var(--transition);
    text-transform: capitalize;
  }

  .submit-btn:hover {
    color: var(--clr-white);
  }

  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 4rem;
      margin-top: 2rem;
    }

    p {
      margin-bottom: 0;
    }

    .contact-form {
      margin-top: 0;
    }
  }

  @media (min-width: 1280px) {
    padding: 5rem 0 1rem 0;
  }
`;

export default Wrapper;
