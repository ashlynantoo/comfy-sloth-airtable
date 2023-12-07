import styled from "styled-components";

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;

  span {
    color: var(--primary-color);
  }

  h5 {
    color: var(--clr-white);
    margin: 0;
    text-transform: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export default Wrapper;
