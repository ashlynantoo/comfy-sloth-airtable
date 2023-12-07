import { Link } from "react-router-dom";
import hero1 from "../assets/images/hero-1.jpeg";
import hero2 from "../assets/images/hero-2.jpeg";
import Wrapper from "../assets/wrappers/Hero";

const Hero = () => {
  return (
    <Wrapper className="section section-center">
      <article>
        <h1>
          design your <br />
          comfort zone
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias.
        </p>
        <Link to="/products" className="btn hero-btn">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <img src={hero1} alt="hero image table" className="main-img" />
        <img
          src={hero2}
          alt="hero image person working"
          className="accent-img"
        />
      </article>
    </Wrapper>
  );
};

export default Hero;
