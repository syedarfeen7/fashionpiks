import styles from "../../Styling/Loginstyle/login.module.css";
import "../../Styling/Globalstyle/global.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
const LoginForm = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const setPasswordVisible = () => {
    setPasswordVisibility(!passwordVisibility);
    const eye = document.getElementById("eye_icon");
    if (eye.type === "password") {
      eye.type = "text";
    } else {
      eye.type = "password";
    }
  };

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const setUserLogin = () => {};
  return (
    <div className={styles.main_wrapper}>
      <div className={styles.login_row_wrapper}>
        <Row className={styles.login_box_wrapper}>
          <Col
            xl={5}
            lg={5}
            md={5}
            className={`${styles.login_left_box} left_box`}
          >
            <div className={`${styles.main_log_img} left_wrapper`}>
              <div className={`${styles.login_left_box_logo} logo`}>
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
            <div className={`${styles.login_right_box}`}>
              <div className={`${styles.p_login_heading} form_heading`}>
                <p className="text-center">Login to Your Account</p>
              </div>
              <div>
                <Form className={`${styles.login_form} form`}>
                  <Form.Group className="mb-5" controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      required
                      name="email"
                      onChange={handleChange}
                      placeholder="Enter Your Email"
                      className={`${styles.email_field} field`}
                    />
                  </Form.Group>
                  <div className={styles.password_wrapper}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control
                        type="password"
                        required
                        name="password"
                        onChange={handleChange}
                        placeholder="Enter Your Password"
                        className={`${styles.password_field} field`}
                        id="eye_icon"
                      />
                      {passwordVisibility ? (
                        <FaEye
                          className={styles.eye_icon}
                          onClick={() => {
                            setPasswordVisible();
                          }}
                        />
                      ) : (
                        <FaEyeSlash
                          className={styles.eye_icon}
                          onClick={() => {
                            setPasswordVisible();
                          }}
                        />
                      )}
                    </Form.Group>
                  </div>
                  <Form.Group
                    className="mb-3 remember_me"
                    controlId="formBasicCheckbox"
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <Form.Check
                        type="checkbox"
                        label="Remember Me"
                        className={styles.remember_me}
                      />
                      <Link to="#">
                        <span className={styles.forgot_password}>
                          Forgot Password?
                        </span>
                      </Link>
                    </div>
                  </Form.Group>
                  <input
                    type="submit"
                    className={`${styles.signin_btn}  form_btn`}
                    value="Sign In"
                    onClick={setUserLogin}
                  />
                </Form>
              </div>
              <div
                className={`${styles.signup_link} text-center important_form_text`}
              >
                <span>
                  Don't have an Account?{" "}
                  <Link to="/signup">
                    <strong>Sign Up Here</strong>
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
export default LoginForm;
