import { Col, Container, Row } from "react-bootstrap";
import styles from "../../Styling/Footerstyle/Footer.module.css";
const Footer = () => {
  return (
    <>
      <Container className={styles.footer_container}>
        <Row>
          <Col>
            <div className={styles.footer_wrapper}>
              <footer>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Sign Up</li>
                  <li>Help</li>
                  <li>Privacy</li>
                  <li>Terms</li>
                </ul>
              </footer>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
