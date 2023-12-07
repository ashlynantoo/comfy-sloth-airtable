import styled from "styled-components";

const Wrapper = styled.section`
  background: var(--primary-light-color);

  .header h3 {
    margin-bottom: 2rem;
    font-weight: 700;
  }

  h3,
  h4 {
    text-align: center;
  }

  p {
    margin: 0;
    color: var(--primary-dark-color);
  }

  .services-center {
    margin-top: 3rem;
    display: grid;
    gap: 2rem;
  }

  .service {
    background: var(--clr-primary-7);
    border-radius: var(--border-radius);
    text-align: center;
    padding: 2rem;

    h4 {
      margin-bottom: 0.5rem;
    }

    p {
      color: var(--clr-primary-1);
    }
  }

  span {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    margin: 0 auto;
    margin-bottom: 1rem;
    background: var(--primary-light-color);
    color: var(--clr-primary-1);

    svg {
      font-size: 2rem;
    }
  }

  @media (min-width: 768px) {
    .services-center {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }

    .header h3 {
      text-align: left;
      margin-bottom: 0;
    }
  }

  @media (min-width: 1280px) {
    .section {
      padding-bottom: 0;
    }

    .services-center {
      grid-template-columns: 1fr 1fr 1fr;
      margin-top: 0;
      transform: translateY(4rem);
    }
  }
`;

export default Wrapper;
