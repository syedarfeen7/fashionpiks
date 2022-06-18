import styles from "../../Styling/Profilestyle/ProfileSetup.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useState } from "react";
import Footer from "../Footer/Footer";
import { BsCamera } from "react-icons/bs";
const CompleteProfileSetupForm = () => {
  const [completeProfileSetupData, setCompleteProfileSetupData] = useState({
    profileImage: "",
    recoveryEmail: "",
    gender: "",
    userName: "",
    aboutYourself: "",
    country: "",
    ageGroup: "",
  });

  const handleChange = (e) => {
    setCompleteProfileSetupData({
      ...completeProfileSetupData,
      [e.target.name]: e.target.value,
    });
  };
  const saveCompleteProfileDetails = () => {};
  return (
    <>
      <Container fluid className={`main_container_two`}>
        <div className={`inner_main_div_wrapper ${styles.main_wrapper} ${styles.main_wrapper_two}`}>
          <Row>
            <Col xl={12} xs={12}>
              <div className={`${styles.profile_heading_wrapper}`}>
                <h5>
                  <span>C</span>
                  <span className={styles.border_pink}>omplete</span> Profile
                  Setup
                </h5>
              </div>
            </Col>
          </Row>
          <Row className={styles.form_row}>
            <Col xl={6} lg={6} sm={12}>
              <div className={styles.first_col_wrapper}>
                <div className={styles.change_profile_wrapper}>
                  <h6>Choose Profile Picture</h6>
                  <div className={styles.user_profile_image_wrapper}>
                    <img
                      src={
                        completeProfileSetupData.profileImage
                          ? `${completeProfileSetupData.profileImage}`
                          : "/images/faq-img-4.png"
                      }
                      alt="change_photo"
                      className={styles.user_profile_image}
                    />
                    <div className={styles.camera_icon_wrapper}>
                      <div className={styles.inner_wrapper}>
                        <BsCamera className={styles.camera_icon} />
                        <input
                          type="file"
                          name="profileImage"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={6} lg={6} sm={12}>
              <div className={styles.first_col_wrapper}>
                <div>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className={styles.field_label_wrapper}>
                      <h6>
                        Enter Your Username (<span>*</span>)
                        <img src="/images/infoicon.png" alt="info" />
                      </h6>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      name="userName"
                      required
                      onChange={handleChange}
                      className={`${styles.prfile_setup_field} field`}
                    />
                  </Form.Group>
                </div>
                <div className={`${styles.fields_wrapper} ${styles.fields_wrapper_two}`}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className={styles.field_label_wrapper}>
                      <h6>About Yourself (Optional)</h6>
                    </Form.Label>
                    <div className={styles.about_text_wrapper}>
                      <Form.Control
                        className={`${styles.about_text_field} field`}
                        as="textarea"
                        maxLength={200}
                        name="aboutYourself"
                        style={{ resize: "none" }}
                        rows={3}
                        onChange={handleChange}
                        placeholder="Anything You Would Like To Share"
                      />
                      <span className={`${styles.length_counter}`}>
                        {completeProfileSetupData.aboutYourself?.length >= 10
                          ? ""
                          : "0"}
                        {completeProfileSetupData.aboutYourself?.length}/200
                      </span>
                    </div>
                  </Form.Group>
                </div>
              </div>
            </Col>
          </Row>
          <Row className={styles.form_row}>
            <Col xl={6} lg={6} sm={12}>
              <div className={styles.second_col_wrapper}>
                <div className={`${styles.fields_wrapper} email_field_wrapper`}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className={styles.field_label_wrapper}>
                      <h6>
                        Enter Recovery Email Address (<span>*</span>)
                        <img src="/images/infoicon.png" alt="info" />
                      </h6>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="recoveryEmail"
                      required
                      onChange={handleChange}
                      placeholder="Enter e-mail address"
                      className={`${styles.prfile_setup_field} field`}
                    />
                  </Form.Group>
                </div>
                <div className={`${styles.fields_wrapper} ${styles.fields_wrapper_two}`}>
                  <Form.Label className={styles.field_label_wrapper}>
                    <h6>
                      Select Your Gender (<span>*</span>)
                      <img src="/images/infoicon.png" alt="info" />
                    </h6>
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="gender"
                    onChange={handleChange}
                    className={`${styles.prfile_setup_field} field`}
                  >
                    <option disabled defaultChecked>
                      Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Form.Select>
                </div>
              </div>
            </Col>
            <Col xl={6} lg={6} sm={12}>
              <div className={styles.second_col_wrapper}>
                <div className={`${styles.fields_wrapper} country_wrapper`}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className={styles.field_label_wrapper}>
                      <h6>
                        Country of Residence (<span>*</span>)
                        <img src="/images/infoicon.png" alt="info" />
                      </h6>
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      name="country"
                      required
                      onChange={handleChange}
                      className={`${styles.prfile_setup_field} field`}
                    >
                      <option disabled defaultChecked>
                        Select Your Country
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className={`${styles.fields_wrapper}`}>
                  <Form.Label className={styles.field_label_wrapper}>
                    <h6>
                      Select Age Group (<span>*</span>)
                      <img src="/images/infoicon.png" alt="info" />
                    </h6>
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="ageGroup"
                    required
                    onChange={handleChange}
                    className={`${styles.prfile_setup_field} field`}
                  >
                    <option disabled defaultChecked>
                      Age Group
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Form.Select>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <div className={styles.btn_wrapper}>
              <input
                type="submit"
                className={` ${styles.finish_setup} form_btn `}
                value="Finish Setup"
                onClick={saveCompleteProfileDetails}
              />
            </div>
          </Row>
        </div>
        <Footer />
        <div className="copyright_wrapper">
            <span>FashionPiks &copy; 2022 </span>
          </div>
      </Container>
    </>
  );
};
export default CompleteProfileSetupForm;
