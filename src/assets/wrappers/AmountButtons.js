import styled from "styled-components";

const Wrapper = styled.div`
  width: 75px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  place-items: center;

  .amount {
    margin-bottom: 0;
    font-size: 1.2rem;
    font-weight: 700;
  }

  .amount-btn {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default Wrapper;
