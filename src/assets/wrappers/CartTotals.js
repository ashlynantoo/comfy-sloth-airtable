import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  article {
    background: var(--clr-grey-10);
    border: 1px solid var(--clr-grey-9);
    border-radius: var(--border-radius);
    padding: 1.5rem;
    display: grid;
    gap: 0.5rem;
    width: var(--view-width);
    max-width: var(--fixed-width);
  }

  h5 {
    border-bottom: 1px solid var(--clr-grey-9);
    margin-bottom: 0;
    padding-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
    font-size: var(--text-sm);
  }

  .total {
    border-bottom: none;
    font-size: var(--text-md);
    font-weight: 700;
    padding-top: 0.75rem;
  }

  .btn {
    height: 2.3rem;
    width: var(--view-width);
    max-width: var(--fixed-width);
    text-align: center;
  }

  @media (min-width: 640px) {
    align-items: flex-end;
  }
`;

export default Wrapper;
