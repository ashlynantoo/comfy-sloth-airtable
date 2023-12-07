import { useForm } from "@formspree/react";
import { toast } from "react-toastify";
import Wrapper from "../assets/wrappers/Contact";

const Contact = () => {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_KEY);

  if (state.succeeded) {
    toast.success("Thank you for joining!");
  }

  if (state.errors) {
    toast.error(state.errors);
  }

  return (
    <Wrapper>
      <div className="section section-center">
        <h3>Join our newsletter and get 20% off</h3>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint unde quaerat ratione soluta veniam provident adipisci cumque
            eveniet tempore?
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              id="email"
              type="email"
              name="email"
              className="form-input"
              placeholder="Enter email"
              required
            />
            <button
              type="submit"
              className="submit-btn"
              disabled={state.submitting}
            >
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
