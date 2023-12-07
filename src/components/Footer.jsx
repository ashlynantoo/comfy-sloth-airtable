import Wrapper from "../assets/wrappers/Footer";

const Footer = () => {
  return (
    <Wrapper>
      <h5>
        <span>ComfySloth </span>
        &copy; {new Date().getFullYear()}
      </h5>
      <h5>All rights reserved</h5>
    </Wrapper>
  );
};

export default Footer;
