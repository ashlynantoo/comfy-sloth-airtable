import styled from "styled-components";

const Wrapper = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    img {
      width: 175px;
      margin-left: -10px;
    }
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--primary-color);
    cursor: pointer;
    display: flex;
    align-items: center;

    svg {
      font-size: 1.75rem;
    }
  }

  .nav-links {
    display: none;
  }

  .cart-btn-wrapper {
    display: none;
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }

    .section-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }

    .nav-links {
      display: flex;
      justify-content: center;
      gap: 1.75rem;

      a {
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--letter-spacing-lg);
        &:hover {
          border-bottom: 2px solid var(--primary-color);
        }
      }
    }

    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Wrapper;
