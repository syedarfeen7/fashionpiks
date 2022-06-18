import { Container, Modal, Button, Form, Dropdown } from "react-bootstrap";
import { AiFillCloseCircle } from "react-icons/ai";
import { GrGallery } from "react-icons/gr";
import styles from "../../Styling/CreatePollForm/Poll.module.css";
import { useState } from "react";
import FileUploader from "../../FileUploader";

const Poll = (props) => {
  const [pollCaption, setPollCaption] = useState("0");

  const setLengthForPollCaption = (e) => {
    setPollCaption(e);
  };
  return (
    <>
      <Container>
        <div>
          <div>
            <Modal
              show={props?.props}
              onHide={props.action}
              className={styles.modal_container}
              centered
              size="lg"
            >
              <div className={styles.modal_wrapper}>
                <Modal.Header className={styles.modal_header}>
                  <div className={styles.modal_header_wrapper}>
                    <Modal.Title className={styles.modal_title}>
                      C<span>reate Poll</span>
                    </Modal.Title>
                    <AiFillCloseCircle
                      className={styles.cross}
                      onClick={props.action}
                    />
                  </div>
                </Modal.Header>
                <Modal.Body>
                  <div className={styles.main_wrapper}>
                    <div className={styles.caption_text_wrapper}>
                      <Form.Control
                        className={`${styles.caption_text_field}`}
                        // as="text"
                        maxLength={100}
                        style={{ resize: "none" }}
                        onChange={(e) => {
                          setLengthForPollCaption(e.target.value.length);
                        }}
                        placeholder="Write caption for your poll. Or leave blank."
                      />
                      <span className={`${styles.length_counter}`}>
                        {pollCaption >= 10 ? "" : "0"}
                        {pollCaption}/100
                      </span>
                    </div>
                    <div className={styles.gallery_icon}>
                      <img src="/images/add_image.png" alt="" />
                    </div>
                  </div>
                  <div className={styles.occasion_share_wrapper}>
                    <div className={styles.select_wrapper}>
                      <Form.Select
                        aria-label="Default select example"
                        className={`${styles.select} `}
                      >
                        <option selected={true} disabled>
                          Occasion / Event
                        </option>
                        <option value="Male" className={`${styles.option}`}>
                          Male
                        </option>
                        <option value="Female" className={`${styles.option}`}>
                          Female
                        </option>
                      </Form.Select>
                    </div>
                    <div className={styles.select_wrapper}>
                      <Form.Select
                        aria-label="Default select example"
                        className={`${styles.select}`}
                        onChange={(e) => {
                          console.log(e.target.value);
                        }}
                      >
                        <option selected={true} disabled>
                          Share With
                        </option>
                        <option value="Male" className={`${styles.option}`}>
                          Male
                        </option>
                        <option value="Female" className={`${styles.option}`}>
                          Female
                        </option>
                      </Form.Select>
                    </div>
                  </div>
                  <FileUploader filesCount={props.filesCount} />
                </Modal.Body>
                <Modal.Footer className={styles.modal_footer}>
                  <Button className={styles.publish_btn}>Publish Poll</Button>
                </Modal.Footer>
              </div>
            </Modal>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Poll;
