import styled from "styled-components";

const Wrapper = styled.main`
  .empty-checkout {
    text-align: center;

    h4 {
      margin-bottom: 1.5rem;
      text-transform: none;
    }
  }

  .checkout {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .btn-container {
    display: none;
  }

  @media (min-width: 1024px) {
    .checkout {
      flex-direction: row;
      justify-content: center;
      gap: 3rem;
    }
  }
`;

export default Wrapper;
