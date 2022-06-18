import styles from "../../../Styling/TabsStyle/Polls.module.css";
import { Container, Row, Col, Form, Dropdown } from "react-bootstrap";
import { FaEllipsisH, FaHeart } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { AiFillCloseCircle } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import {useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Polls = (props) => {
  const navigate = useNavigate()
  // useEffect(() => {
  //   navigate('/profile')
  // }, [props?.props])
  // if(props?.props) {
  //     console.log(props)
  // }
  const [likeState, setLikeState] = useState(false);
  let [commentsCount, setCommentsCount] = useState(74);
  const displayLikeEffect = (isLike) => {
    if (isLike === "like") {
      setLikeState(true);
      setCommentsCount(++commentsCount);
    } else {
      setLikeState(false);
      setCommentsCount(--commentsCount);
    }
  };
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Container className={styles.polls_container} fluid>
        <div className={`${styles.polls_wrapper} polls_wrapper`}>
          <Row>
            <Col xl={6} sm={9} xs={9}>
              <div className={`${styles.polls_user_details_wrapper} d-flex `}>
                <div>
                  <img src="/images/person.png" alt="person" />
                </div>
                <div className={`${styles.name_wrapper} `}>
                  <p>Caroline Sharoff</p>
                  <p>25 March at 3:55 AM</p>
                </div>
              </div>
            </Col>
            <Col xl={6} sm={3} xs={3}>
              <div>
                <div className={styles.polls_dropdown_container}>
                  <Dropdown className={styles.polls_dropdown_wrapper} >
                    <Dropdown.Toggle
                      id="dropdown-autoclose-true"
                      className="droppp"
                    >
                      <FaEllipsisH className={styles.menu_icon}/>
                    </Dropdown.Toggle>
            
                    <Dropdown.Menu className={styles.menu_wrapper}>
                      <p className="mb-0"></p>
                      <Dropdown.Item href="#">Edit Poll</Dropdown.Item>
                      <Dropdown.Item href="#">Delete Poll</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl={12} xs={12}>
              <div className={styles.poll_tagline_wrapper}>
                <span>Help me to pick the best one for a party!! <span className={styles.event_tag}>Party</span></span>
              </div>
            </Col>
          </Row>
          <div className={styles.polls_image_wrapper}>
            <Row>
              <Col>
                <div>
                  <div className={styles.polls_image_wrapper}>
                    <Slider {...settings}>
                      <div>
                        <img src="/images/post5.png" />
                      </div>
                      <div>
                        <img src="/images/post5.png" />
                      </div>
                      <div>
                        <img src="/images/post5.png" />
                      </div>
                      <div>
                        <img src="/images/post5.png" />
                      </div>
                    </Slider>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <div className="mt-5">
                <div className={styles.polling_votes_wrapper}>
                  <div
                    style={{ backgroundColor: "#EA228F", width: "50%" }}
                    className={styles.pink_div}
                  >
                    <div className={styles.polling_votes}>
                      <strong>19%</strong>
                      <span>323 Votes</span>
                    </div>
                  </div>
                </div>

                <div className={styles.polling_votes_wrapper}>
                  <div
                    style={{ backgroundColor: "#EA228F", width: "70%" }}
                    className={styles.pink_div}
                  >
                    <div className={styles.polling_votes}>
                      <strong>79%</strong>
                      <span>323 Votes</span>
                    </div>
                  </div>
                </div>

                <div className={styles.polling_votes_wrapper}>
                  <div
                    style={{ backgroundColor: "#EA228F", width: "20%" }}
                    className={styles.pink_div}
                  >
                    <div className={styles.polling_votes}>
                      <strong>44%</strong>
                      <span>323 Votes</span>
                    </div>
                  </div>
                </div>
                <div className={styles.polling_votes_wrapper}>
                  <div
                    style={{ backgroundColor: "#EA228F", width: "20%" }}
                    className={styles.pink_div}
                  >
                    <div className={styles.polling_votes}>
                      <strong>44%</strong>
                      <span>323 Votes</span>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </div>
          <div className={styles.like_comments_tags_wrapper}>
            <Row>
              <Col xl={6} xs={6}>
                <div className={styles.likes_tag_wrapper}>
                  {likeState ? (
                    <FaHeart
                      className={styles.heart_solid}
                      onClick={() => {
                        displayLikeEffect("unlike");
                      }}
                    />
                  ) : (
                    <FiHeart
                      className={styles.heart_outline}
                      onClick={() => {
                        displayLikeEffect("like");
                      }}
                    />
                  )}
                  &nbsp;
                  <span>{commentsCount}</span>
                </div>
              </Col>
              <Col xl={6} xs={6}>
                <div className={styles.comments_tag_wrapper}>
                  <span>4</span>
                  &nbsp;
                  <span>Comments</span>
                </div>
              </Col>
            </Row>
          </div>
          <Row>
            <Col xl={12} xs={12}>
              <div className={styles.comment_field_wrapper}>
                <Form.Control
                  type="text"
                  placeholder="Write a comment"
                  className={`${styles.comment_field} `}
                />
                <div className={styles.person_image_wrapper}>
                  <img src="/images/person.png" alt="person" />
                </div>
                <div className={styles.sent_icon_wrapper}>
                  <IoMdSend />
                </div>
              </div>
            </Col>
          </Row>
          <div className={styles.view_all_comments}>
            <span>View all comments</span>
          </div>
          {/* <div className="popup-image">
                <span>
                  <AiFillCloseCircle className="close-image-icon"/>
                </span>
                <img src="/images/post5.png"/>
          </div> */}
        </div>
      </Container>
    </>
  );
};
export default Polls;
