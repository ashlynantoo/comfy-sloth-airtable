import styled from "styled-components";

const Wrapper = styled.div`
  margin: 3rem auto;
  display: grid;
  gap: 3rem;

  img {
    height: 225px;
    border-radius: var(--border-radius);
    margin-bottom: 1rem;
  }

  h4 {
    margin-bottom: 0.5rem;
  }

  .price {
    color: var(--primary-color);
    margin-bottom: 0.75rem;
  }

  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }

  .btn {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
  }

  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 2rem;
      align-items: center;
    }

    img {
      width: 300px;
      margin-bottom: 0;
    }
  }
`;

export default Wrapper;
