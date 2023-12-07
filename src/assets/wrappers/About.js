import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  row-gap: 2rem;

  img {
    border-radius: var(--border-radius);
    height: 250px;
    max-width: 45em;
    margin: 0 auto;
  }

  h3 {
    font-weight: 700;
  }

  p {
    max-width: 45em;
    margin: 0 auto;
    margin-top: 1.5rem;
  }

  @media (min-width: 640px) {
    img {
      height: 500px;
    }
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 4rem;
  }
`;

export default Wrapper;
