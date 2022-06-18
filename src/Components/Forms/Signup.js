import "../../Styling/Globalstyle/global.css";
import styles from "../../Styling/Signupstyle/Signup.module.css";
import { Row, Col, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const SignupForm = () => {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };
  const sendSignupRequest = (e) => {};
  return (
    <div className={`${styles.main_wrapper} main_wrapper`}>
      <div className={styles.signup_row_wrapper}>
        <Row>
          <Col
            xl={5}
            lg={5}
            md={5}
            className={`${styles.signup_left_box} left_box`}
          >
            <div className={`${styles.main_log_img} left_wrapper`}>
              <div className={`${styles.signin_left_box_logo} logo`}>
                <img src="/images/logo.png" alt="logo" />
              </div>
              <p>
                Harness the power of instant polling. And let our global
                community of members help you look your absolute best.
              </p>
            </div>
            <div className="img_2_log">
              <img src="/images/responsive_logo.png" alt="brand logo" />
            </div>
          </Col>

          {/* LOGIN RIGHT BOX */}

          <Col item xl={7} lg={7} md={7} className="right_form_box">
            <div className={`${styles.signup_right_box}}`}>
              <div className={`${styles.signup_heading} form_heading`}>
                <p className="text-center">Create a New Account</p>
              </div>
              <div>
                <Form className={`${styles.signup_form} form`}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      name="firstName"
                      required
                      placeholder="Enter Your First Name"
                      className={`${styles.signup_field} field`}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="text"
                      required
                      name="lastName"
                      placeholder="Enter Your Last Name"
                      className={`${styles.signup_field} field`}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="email"
                      name="email"
                      required
                      placeholder="Enter Your Email Address"
                      className={`${styles.signup_field} field`}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="password"
                      name="password"
                      required
                      placeholder="Enter Your Password"
                      className={`${styles.signup_field} field`}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="password"
                      required
                      name="confirmPassword"
                      placeholder="Enter Your Confirm Password"
                      className={`${styles.signup_field} field`}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <div
                    className={`${styles.terms_and_policy} text-center important_form_text`}
                  >
                    <span>
                      By clicking Sign Up, you agree to our
                      <strong>Terms</strong>,<br />
                      <strong> Data Policy and Cookies Policy</strong>.
                    </span>
                  </div>
                  <div className="text-center">
                    <input
                      type="submit"
                      className={`${styles.signup_btn} mt-2 form_btn`}
                      value="Sign Up"
                      onClick={sendSignupRequest}
                    />
                  </div>
                </Form>
              </div>
              <div className={`${styles.signin_link} text-center`}>
                <span>
                  Already a member?{" "}
                  <Link to="/signin">
                    <strong>Sign In</strong>
                  </Link>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default SignupForm;
