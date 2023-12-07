import styled from "styled-components";

const Wrapper = styled.section`
  background: var(--primary-light-color);
  min-height: 5rem;
  display: flex;
  align-items: center;

  h4 {
    margin-bottom: 0;
  }

  a {
    color: var(--primary-color);
    transition: var(--transition);
  }

  a:hover {
    color: var(--primary-dark-color);
  }
`;

export default Wrapper;
