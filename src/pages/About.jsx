import Wrapper from "../assets/wrappers/About";
import { Path, SectionTitle } from "../components";
import aboutImg from "../assets/images/hero-1.jpeg";

const About = () => {
  return (
    <main>
      <Path title="about" />
      <Wrapper className="section section-center page">
        <img src={aboutImg} alt="image of a desk" />
        <article>
          <SectionTitle title="our story" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

export default About;
