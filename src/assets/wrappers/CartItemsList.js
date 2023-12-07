import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  gap: 1.5rem;

  .link-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .link {
    height: 2.3rem;
  }

  @media (min-width: 600px) {
    .link-container {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  @media (max-width: 599px) {
    .link-container {
      .link {
        width: 250px;
        margin: 0 auto;
      }

      a {
        text-align: center;
      }
    }
  }
`;

export default Wrapper;
