import styled from "styled-components";

const Wrapper = styled.section`
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-weight: 700;
  }

  p {
    max-width: 45em;
    margin-bottom: 1.5rem;
  }

  .img-container {
    display: none;
  }

  @media (min-width: 992px) {
    min-height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 9rem;
    text-align: left;

    h1 {
      margin-bottom: 2rem;
    }

    p {
      font-size: 1.1rem;
    }

    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }

    .img-container {
      display: block;
      position: relative;
    }

    .main-img {
      width: 100%;
      height: 525px;
      position: relative;
      border-radius: var(--border-radius);
      display: block;
      object-fit: cover;
    }

    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 225px;
      transform: translateX(-50%);
      border-radius: var(--border-radius);
    }

    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 90%;
      bottom: 0%;
      left: -9%;
      background: var(--primary-color);
      border-radius: var(--border-radius);
    }
  }
`;

export default Wrapper;
