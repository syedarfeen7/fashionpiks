import { Container, Row, Col } from "react-bootstrap";
import styles from "../../Styling/Storestyle/Store.module.css";
import headerStyles from "../../Styling/Headerstyle/Header.module.css";

import Header from "../Header/Header";
const StoreOne = () => {
  return (
    <>
      <Header
        className={`${headerStyles.header_bg} ${headerStyles.bgPink}`}
        props={true}
      />
      <Container fluid>
        <div>
          <div className={styles.store_caption}>
            <img src="/images/store_logo.png" className={styles.store_logo} />
            <div className={styles.store_text}>
              <p>
                You’re only a few clicks away from looking your absolute best
              </p>
              <div className={styles.store_button_container}>
                <a
                  href="#"
                  className={`${styles.store_button} ${styles.pink_color}`}
                >
                  Sign Up
                </a>
                <a
                  href="#"
                  className={`${styles.store_button} ${styles.color_pink}`}
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.store_last_contnet}>
          <Row>
            <Col md={6}>
              <div className={styles.h_100}>
                <div className={`${styles.store_main_content}`}>
                  <h2 className={styles.text_center}>
                    WELCOME TO FASHIONPIKS!
                  </h2>
                  <p className={styles.text_center}>
                    The worlds' first fashion app to use the power of instant
                    polling. Designed to help you pick what to wear, to look
                    your absolute best. From choosing the right outfit, to
                    selecting the perfect shoes. And everything in between.
                  </p>
                  <p className={styles.text_center}>
                    With just a few clicks, our global community of members can
                    help you get ready for any occasion or event. And best of
                    all, the FashionPiks app is absolutely free. With nothing to
                    buy and no subscriptions of any kind.
                  </p>

                  <div className={styles.app_button_container}>
                    <a href="#" className={styles.store_app_buttons}>
                      <img src="/images/play_store.png" />
                    </a>
                    <a href="#" className={styles.store_app_buttons}>
                      <img src="/images/app_store.png" />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div>
                <div className={styles.store_img_selector}>
                  <div className={styles.text_center}>
                    <img src="/images/post1.png" className={styles.d_block} />
                    <input type="radio" />
                  </div>
                  <div className={styles.text_center}>
                    <img src="/images/post2.png" className={styles.d_block} />
                    <input type="radio" />
                  </div>
                  <div className={styles.text_center}>
                    <img src="/images/post3.png" className={styles.d_block} />
                    <input type="radio" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};
export default StoreOne;
