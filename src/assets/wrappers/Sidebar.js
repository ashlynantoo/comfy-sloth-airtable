import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }

  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }

  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    padding-bottom: 0.5rem;
  }

  .logo {
    width: 175px;
  }

  .close-btn {
    font-size: 1.75rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-red-light);
    transition: var(--transition);
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .close-btn:hover {
    color: var(--clr-red-dark);
  }

  .links {
    margin-bottom: 2rem;
  }

  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.75rem 2.5rem;
    transition: var(--transition);
    letter-spacing: var(--letter-spacing-lg);
  }

  .links a:hover {
    padding-left: 2.75rem;
    background: var(--primary-light-color);
  }

  .cart-btn-wrapper {
    padding: 0 2.5rem;
  }
`;

export default Wrapper;
