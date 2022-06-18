import { Container, Row, Col } from "react-bootstrap";
import styles from "../../../Styling/TabsStyle/About.module.css";
import { IoMdSettings } from "react-icons/io";
import { Earth } from "react-icons/fa";
import Footer from "../../Footer/Footer";
const About = () => {
  return (
    <>
      <Container fluid className={styles.about_Container}>
        <div className={styles.inner_about_wrapper}>
          <div className={styles.setting_icon_wrapper}>
            <IoMdSettings />
          </div>
          <Row>
            <Col xl={6} md={6} sm={12}>
              <div>
                <div className={styles.about_heading_wrapper}>
                  <span>A</span>
                  <span>bout</span>
                </div>
                <div className={styles.about_para_wrapper}>
                  <span>
                    Lorem Ipsum is simply dummy text of the <br /> printing and
                    typesetting industry. Lorem simply <br /> dummy text of the
                    printing and typesetting <br /> industry
                  </span>
                </div>
              </div>
            </Col>
            <Col xl={6} md={6} sm={12}>
              <div className={styles.col2_wrapper}>
                <div className={styles.userName_heading_wrapper}>
                  <span>U</span>
                  <span>sername</span>
                </div>
                <div className={styles.username_wrapper}>
                  <span>caroline_sharoff</span>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl={6} md={6} sm={12}>
              <div>
                <div className={styles.country_heading_wrapper}>
                  <span>C</span>
                  <span>ountry of Residence</span>
                </div>
                <div className={styles.country_wrapper}>
                  <img src="/images/earthicon.png" alt="earth" />
                  <span>United States of America</span>
                </div>
              </div>
            </Col>
            <Col xl={6} md={6} sm={12}>
              <div className={styles.col2_wrapper}>
                <div className={styles.gender_heading_wrapper}>
                  <span>G</span>
                  <span>ender</span>
                </div>
                <div className={styles.gender_wrapper}>
                  <img src="/images/account.png" />
                  <span>Female</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};
export default About;
