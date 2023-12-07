import styled from "styled-components";

const Wrapper = styled.section`
  .main {
    height: 300px;
  }

  img {
    border-radius: var(--border-radius);
  }

  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;

    img {
      height: 50px;
      cursor: pointer;
    }
  }

  .active {
    border: 2px solid var(--primary-color);
  }

  @media (min-width: 426px) {
    .main {
      height: 450px;
    }

    .gallery {
      img {
        height: 75px;
      }
    }
  }

  @media (min-width: 640px) {
    .main {
      height: 600px;
    }

    .gallery {
      img {
        height: 100px;
      }
    }
  }

  @media (min-width: 992px) {
    .main {
      height: 500px;
    }

    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default Wrapper;
