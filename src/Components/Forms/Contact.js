import styles from "../../Styling/Contactstyle/Contact.module.css";
import "../../Styling/Globalstyle/global.css";
import { Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
const ContactForm = () => {
  const [contactData, setContactData] = useState({
    firstName: "",
    lastname: "",
    email: "",
    subject: "",
    messaage: "",
  });
  const handleChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value,
    });
  };

  const sendContactData = () => {};
  return (
    <div className={`${styles.main_wrapper} `}>
      <div className={styles.contact_row_wrapper}>
        <Row>
          <Col
            xl={5}
            lg={5}
            md={5}
            className={`${styles.contact_left_box} left_box`}
          >
            <div className={`${styles.main_log_img} left_wrapper`}>
              <div className={`${styles.contact_left_box_logo} logo`}>
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
            <div className={`${styles.contact_right_box}}`}>
              <div className={`${styles.h3_contact_heading} form_heading`}>
                <p className="text-center">Send Us a Message</p>
              </div>
              <div>
                <Form className={`${styles.contact_form} form`}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      required
                      name="firdtName"
                      onChange={handleChange}
                      placeholder="Enter Your First Name"
                      className={`${styles.contact_field} field`}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="text"
                      required
                      name="lastName"
                      onChange={handleChange}
                      placeholder="Enter Your Last Name"
                      className={`${styles.contact_field} field`}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="email"
                      required
                      name="email"
                      onChange={handleChange}
                      placeholder="Enter Your Email Address"
                      className={`${styles.contact_field} field`}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="text"
                      required
                      name="subject"
                      onChange={handleChange}
                      placeholder="Subject"
                      className={`${styles.contact_field} field`}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      as="textarea"
                      required
                      name="message"
                      onChange={handleChange}
                      rows={3}
                      placeholder="Enter your Message Here"
                      className={`${styles.contact_field} field`}
                    />
                  </Form.Group>

                  <div className={styles.contact_btn_wrapper}>
                    <input
                      type="submit"
                      className={`${styles.contact_btn} mt-2 form_btn`}
                      value="Send Message"
                      onClick={sendContactData}
                    />
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default ContactForm;
