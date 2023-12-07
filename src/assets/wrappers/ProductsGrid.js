import styled from "styled-components";

const Wrapper = styled.div`
  .products-grid {
    margin: 3rem auto;
    display: grid;
    gap: 2rem;
  }

  @media (min-width: 768px) {
    .products-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 1024px) {
    .products-grid {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  .img-container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--border-radius);
  }

  img {
    height: 225px;
    border-radius: var(--border-radius);
    transition: var(--transition);
  }

  .img-container:hover img {
    opacity: 0.5;
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;

    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }

  .img-container:hover .link {
    opacity: 1;
  }

  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  footer h5,
  footer p {
    margin: 0;
  }

  footer p {
    color: var(--primary-color);
    letter-spacing: var(--letter-spacing-lg);
  }
`;

export default Wrapper;
