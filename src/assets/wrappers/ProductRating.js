import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;

  .stars {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  span {
    color: #ffb900;
    font-size: 1rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 0;
    color: var(--text-color);
  }
`;

export default Wrapper;
