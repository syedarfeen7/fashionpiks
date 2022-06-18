import "../../Styling/CustomizeRadioButton/CustomizeRadioButton.css";
import { Container, Row, Col, Accordion, Form, Button } from "react-bootstrap";
import Header from "../Header/Header";
import headerStyles from "../../Styling/Headerstyle/Header.module.css";
import styles from "../../Styling/FAQ/FAQ.module.css";
import FAQAccordionData from "./FAQAccordionData";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
const FAQ = () => {
  const [feedBackLink, setFeedBackLink] = useState(false);
  const [isHelpful, setIsHelpful] = useState(false);
  const [totalViews, setTotalViews] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    countVisits();
  }, []);

  const onHandleClick = () => {
    setIsHelpful(!isHelpful);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onHandleClickForTopLink = () => {
    setFeedBackLink(true);
    scrollToBottom();
  };

  const countVisits = () => {
    axios
      .get("https://api.countapi.xyz/update/mysite.com/?amount=1")
      .then((res) => {
        setTotalViews(res.data.value);
      });
  };

  return (
    <div className={styles.main_faq_cont}>
      <Header
        className={`${headerStyles.header_bg} ${headerStyles.bgPink}`}
        props={true}
      />

      <Container fluid>
        <div className={styles.faq_main_container}>
          <Row className={styles.faq_desc}>
            <Col md={7}>
              <div>
                <span className={styles.head_font}>FR</span>
                <span className={`${styles.main_head} ${styles.head_font}`}>
                  EQUENTLY ASKED QUESTIONS (FAQ)
                </span>
                <p className={styles.vews_count}>{totalViews} views</p>
              </div>
            </Col>
            <Col md={5}>
              <div className={styles.faq_link_container}>
                <p onClick={onHandleClickForTopLink}>
                  HELP US IMPROVE YOUR USER EXPERIENCE.
                  <br />
                  PLEASE SHARE YOUR FEEDBACK.
                </p>
              </div>
            </Col>
          </Row>
          <div className={styles.faq_accordian}>
            <Accordion defaultActiveKey="0" className={styles.main_accor}>
              <Accordion.Item eventKey="0" id={styles.acc_item}>
                <Accordion.Header className={styles.accordion_name}>
                  <div className={styles.accordian_title}>
                    HOW CAN THE FASHIONPIKS APP HELP ME?
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <p className={styles.main_text}>
                    FashionPiks can be used for just about any fashion related
                    decision. <br />
                    And with just a few clicks, you can be sure to look your
                    absolute best.
                  </p>
                  <Row>
                    {FAQAccordionData.map((e) => (
                      <Col md={6}>
                        <div className={styles.faq_cards}>
                          <div className={styles.main_card}>
                            <div className={styles.card_caption}>
                              <span className={styles.card_no}>
                                {e.imageNumber}
                              </span>
                              <p className={styles.card_desc}>{e.imageTag}</p>
                            </div>

                            <div className={styles.card_img}>
                              <img
                                src={e.imageURL}
                                className={styles.faq_img}
                                alt="accordion_image"
                              />
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                  <Col md={6} className={styles.m_auto}>
                    <div className={styles.faq_cards}>
                      <div className={styles.main_card}>
                        <div className={styles.card_caption}>
                          <span className={styles.card_no}>7</span>
                          <p className={styles.card_desc}>
                            Choose the right sunglasses.
                          </p>
                        </div>

                        <div className={styles.card_img}>
                          <img
                            alt="accordin-img"
                            src="/images/faq-img-07.png"
                            className={styles.faq_img}
                          />
                        </div>
                      </div>
                    </div>
                  </Col>

                  <Col md={6} className={styles.m_set}>
                    <div className={styles.faq_cards}>
                      <div className={styles.main_card}>
                        <div className={styles.card_caption}>
                          <span className={styles.card_no}>8</span>
                          <p className={styles.card_desc}>
                            And if you’re making room in your closet, or making
                            changes to your wardrobe, FashionPiks can even help
                            you decide what you should keep and what should go.
                          </p>
                        </div>

                        <div className={styles.card_img}>
                          <img
                            alt="accordin-img"
                            src="/images/faq-img-8.png"
                            className={styles.faq_img}
                          />
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Row></Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion className={styles.main_accor}>
              <Accordion.Item eventKey="0" id={styles.acc_item}>
                <Accordion.Header className={styles.accordion_name}>
                  <div className={styles.accordian_title}>
                    HOW DOES IT WORK?
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className={styles.container_accor}>
                    <p className={styles.for_ex_top}>
                      You upload your pictures onto the FashionPiks app. With
                      the different options that you are considering.
                    </p>
                    <p className={styles.for_top_pad}>FOR EXAMPLE:</p>
                    <ul
                      className={`${styles.outfit_list} ${styles.list_style_none}`}
                    >
                      <li>- Outfit # 1</li>
                      <li>- Outfit # 2</li>
                      <li>- Outfit # 3</li>
                    </ul>
                    <p className={styles.for_top_pad}>
                      Then our global community of members can vote for the
                      option they like best. Generating a 'score' for each
                      option. And providing you with instant, actionable
                      feedback.{" "}
                    </p>
                    <p className={styles.for_top_pad}> FOR EXAMPLE: </p>
                    <ul
                      className={`${styles.outfit_list} ${styles.list_style_none}`}
                    >
                      <li>- Outfit # 1 RECEIVED 18% OF THE VOTES.</li>
                      <li>- Outfit # 2 RECEIVED 57% OF THE VOTES.</li>

                      <li>- Outfit # 3 RECEIVED 25% OF THE VOTES.</li>
                    </ul>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion className={styles.main_accor}>
              <Accordion.Item eventKey="0" id={styles.acc_item}>
                <Accordion.Header className={styles.accordion_name}>
                  <div className={styles.accordian_title}>
                    HOW SOON WILL I KNOW THE RESULTS OF MY POLL?
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className={styles.container_accor}>
                    <p>
                      You can upload anywhere from one to five pictures. You can
                      upload one picture for a simple ‘Yes’ or ‘No’ poll. Or you
                      can upload multiple pictures for selecting the best
                      option.
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion className={styles.main_accor}>
              <Accordion.Item eventKey="0" id={styles.acc_item}>
                <Accordion.Header className={styles.accordion_name}>
                  <div className={styles.accordian_title}>
                    HOW MANY POLLS CAN I RUN?
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className={styles.container_accor}>
                    <p>
                      There are no limits on how many polls you can run. And we
                      have had members go through their entire closet, going
                      through hundreds of items, using our app.
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion className={styles.main_accor}>
              <Accordion.Item eventKey="0" id={styles.acc_item}>
                <Accordion.Header className={styles.accordion_name}>
                  <div className={styles.accordian_title}>
                    HOW MANY PICTURES CAN I UPLOAD?
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className={styles.container_accor}>
                    <p>
                      You can upload anywhere from one to five pictures. You can
                      upload one picture for a simple ‘Yes’ or ‘No’ poll. Or you
                      can upload multiple pictures for selecting the best
                      option.
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion className={styles.main_accor}>
              <Accordion.Item eventKey="0" id={styles.acc_item}>
                <Accordion.Header className={styles.accordion_name}>
                  <div className={styles.accordian_title}>
                    CAN I CHOOSE WHO IS ALLOWED TO VOTE ON MY POLLS?
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className={styles.container_accor}>
                    <p>
                      Yes, absolutely. You can make your poll available only to
                      your followers. Or you can make your poll available to the
                      entire FashionPiks community.
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion className={styles.main_accor}>
              <Accordion.Item eventKey="0" id={styles.acc_item}>
                <Accordion.Header className={styles.accordion_name}>
                  <div className={styles.accordian_title}>
                    WHAT HAPPENS TO MY PICTURES AFTER MY POLL IS FINISHED?
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className={styles.container_accor}>
                    <p>
                      This is completely up to you. You can choose to leave your
                      poll on your profile for future reference. Or you can
                      choose to delete your poll after your poll has been
                      completed.
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div className="faq_related_info" id="feedback">
              {!feedBackLink && !isHelpful ? (
                <>
                  <p className="faq_conf_title">
                    Was this information helpful?
                  </p>
                  <div className="faq_related_info_caption">
                    <div>
                      <input
                        type="radio"
                        id="test1"
                        value="Yes"
                        name="radio-group"
                        checked
                        onClick={onHandleClick}
                      />
                      <label for="test1">Yes</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="test2"
                        value="No"
                        name="radio-group"
                        onClick={onHandleClick}
                      />
                      <label for="test2">No</label>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="feedback_wrapper">
                    <p className="feedback_title">How could it be better?</p>
                    <p className="feedback_para">
                      Please note that this form is for feedback only, and you
                      will not receive a reply. Therefore, please do not include
                      any personal information here.
                    </p>
                    <div>
                      <Form>
                        <Form.Group controlId="formBasicEmail">
                          <div>
                            <Form.Control
                              as="textarea"
                              maxLength={200}
                              style={{ resize: "none" }}
                              className="feedback_field"
                              rows={3}
                              placeholder="Help us improve your user experience. Please share your feedback."
                            />
                          </div>
                        </Form.Group>
                      </Form>
                      <div className="feedback_btn_wrapper">
                        <Button className="feedback_submit_btn">Submit</Button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div ref={messagesEndRef}>
              <Link to="/contact" className={styles.faq_end_desc}>
                CAN’T FIND THE ASNWERS YOU’RE LOOKING FOR? <br />
                CLICK HERE TO SEND US A MESSAGE.
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <footer className={styles.footer_container}>
        <p className={styles.footer_text}>FashionPiks&copy; 2022 </p>
      </footer>
    </div>
  );
};
export default FAQ;
