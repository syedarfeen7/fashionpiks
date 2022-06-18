import styles from "../../Styling/Herostyle/Hero.module.css";

import { Button, Col, Container, Row } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import Poll from "../Forms/Poll";
const Hero = () => {
  const [show, setShow] = useState(false);
  // const [filesCount, setFilesCount] = useState(0);
  let filesCount = 0;
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    filesCount = 0;
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col xl={6} lg={6} md={6} sm={12} xs={12} style={{ padding: "0" }}>
            <div className={styles.user_info_wrapper}>
              <div className={styles.user_info_inner_wrapper}>
                <div className={styles.user_image_wrapper}>
                  <img src="/images/userprofile.png" alt="user profile" />
                  <div className={styles.online_icon}></div>
                </div>
                <div className={styles.user_text_wrapper}>
                  <h3>Caroline Sharoff</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem simply.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6} md={6} sm={12} xs={12} style={{ padding: "0" }}>
            <div className={styles.account_details_wrapper}>
              <div className={styles.follower_count_wrapper}>
                <div className={styles.inner_wrapper}>
                  <span>852</span>
                  <br />
                  <span>Followers</span>
                </div>
                <div className={styles.inner_wrapper}>
                  <span>100</span>
                  <br />
                  <span>Following</span>
                </div>
                <div className={styles.inner_wrapper}>
                  <span>23</span>
                  <br />
                  <span>Polls</span>
                </div>
              </div>
              <div className={styles.status_btn_wrapper}>
                <div>
                  <span className={styles.status_text}>Status</span>
                  <span className={styles.online_text}>Online</span>
                </div>
                <div className={styles.btn_wrapper}>
                  <Button
                    className={styles.create_poll_btn}
                    onClick={handleShow}
                  >
                    <AiOutlinePlus className={styles.plus} /> Create Poll
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Poll props={show} action={handleClose} filesCount={filesCount} />
      </Container>
    </>
  );
};
export default Hero;
