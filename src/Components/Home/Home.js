import styles from "../../Styling/TabsStyle/Polls.module.css";
import homeStyles from "../../Styling/Homestyle/Home.module.css";
import { Container, Row, Col, Dropdown, Form, Button } from "react-bootstrap";
import { FaEllipsisH, FaHeart, FaPlus } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import { BsXLg, BsX } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import { GoCircleSlash } from "react-icons/go";
import { useState } from "react";
import HomeDummyData from "./HomeDummyData";
import Footer from "../Footer/Footer";
import Poll from "../Forms/Poll";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () => {
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
  const [show, setShow] = useState(false);
  let filesCount = 0;
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    filesCount = 0;
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
      <Container fluid className={homeStyles.home_container}>
        <Row>
          <Col xl={3} lg={3} md={2}>
            <div className={homeStyles.left_aside_wrapper_}>
              <aside className={homeStyles.left_aside}>
                <div className={homeStyles.image_name_wrapper}>
                  <img src="/images/userprofile.png" alt="userprofile" />
                  <p>Caroline Sharoff</p>
                </div>
                <div>
                  <div className={homeStyles.follower_count_wrapper}>
                    <div className={homeStyles.inner_wrapper}>
                      <span>852</span>
                      <br />
                      <span>Followers</span>
                    </div>
                    <div className={homeStyles.inner_wrapper}>
                      <span>100</span>
                      <br />
                      <span>Following</span>
                    </div>
                    <div className={homeStyles.inner_wrapper}>
                      <span>23</span>
                      <br />
                      <span>Polls</span>
                    </div>
                  </div>
                </div>
                <div className={homeStyles.btn_wrapper}>
                  <Button
                    className={homeStyles.create_poll_btn}
                    onClick={handleShow}
                  >
                    <FaPlus className={homeStyles.plus} /> Create Poll
                  </Button>
                </div>
              </aside>

              <div className={homeStyles.freinds_image_wrapper}>
                <img src="/images/follower_1.png" alt="follower_image" />
                <img src="/images/follower_2.png" alt="follower_image" />
                <img src="/images/follower_3.png" alt="follower_image" />
                <img src="/images/follower_4.png" alt="follower_image" />
                <img src="/images/follower_5.png" alt="follower_image" />
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6} md={8}>
            <div className={`${homeStyles.home_post_wrapper}`}>
              {HomeDummyData.map((e) => (
                <div className={`${homeStyles.home_polls_details_wrapper}`}>
                  <Row>
                    <Col xl={6} xs={6}>
                      <div
                        className={`${styles.polls_user_details_wrapper} d-flex `}
                      >
                        <div>
                          <img src={e.userImage} alt="person" />
                        </div>
                        <div className={`${styles.name_wrapper} `}>
                          <p>{e.userName}</p>
                          <p>{e.pollUploadTime}</p>
                        </div>
                      </div>
                    </Col>
                    <Col xl={6} xs={6}>
                      <div >
                        <div className={styles.polls_dropdown_container}>
                          <Dropdown className={styles.polls_dropdown_wrapper}>
                            <Dropdown.Toggle
                              id="dropdown-autoclose-true"
                              className="droppp"
                            >
                              <FaEllipsisH className={styles.menu_icon}/>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className={styles.menu_wrapper}>
                              <p className="mb-0"></p>
                              <Dropdown.Item href="#">Edit Poll</Dropdown.Item>
                              <Dropdown.Item href="#">
                                Delete Poll
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={12} xs={12}>
                      <div className={styles.poll_tagline_wrapper}>
                        <span>
                          Help me to pick the best one for a {e.eventTag}!!
                        </span>
                        <div>
                          <span className={styles.event_tag}>{e.eventTag}</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div
                    className={`${styles.polls_image_wrapper} ${homeStyles.home_polls_image_wrapper}`}
                  >
                    <Row>
                      <Col>
                        <div>
                          <div className={styles.polls_image_wrapper}>
                            <Slider {...settings}>
                              <div>
                                <img src={e.pollImages.imageOne} />
                              </div>
                              <div>
                                <img src={e.pollImages.imageTwo} />
                              </div>
                              <div>
                                <img src={e.pollImages.imageThree} />
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
                            className={`${styles.pink_div} ${homeStyles.home_pink_div}`}
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
                            className={`${styles.pink_div} ${homeStyles.home_pink_div}`}
                          >
                            <div className={styles.polling_votes}>
                              <strong>19%</strong>
                              <span>323 Votes</span>
                            </div>
                          </div>
                        </div>

                        <div className={styles.polling_votes_wrapper}>
                          <div
                            style={{ backgroundColor: "#EA228F", width: "20%" }}
                            className={`${styles.pink_div} ${homeStyles.home_pink_div}`}
                          >
                            <div className={styles.polling_votes}>
                              <strong>19%</strong>
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
                          <span>{e.totalComments}</span>
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
                </div>
              ))}
            </div>
          </Col>
          <Col xl={3} lg={3} md={2}>
            <div className={homeStyles.right_aside_wrapper}>
              <aside>
                <div className={homeStyles.pending_heading}>
                  <span>P</span>
                  <span>ending Requests</span>
                </div>
                <div>
                  <div className={homeStyles.request_wrapper}>
                    <div className={homeStyles.image_wrapper}>
                      <img src="/images/follower_1.png" alt="" />
                      <p>Olivia</p>
                    </div>
                    <div className={homeStyles.request_action_wrapper}>
                      <strong>128</strong>
                      <p>Polls</p>
                      <div>
                        <AiOutlineCheck
                          className={`${homeStyles.card_icon} ${homeStyles.check}`}
                        />
                        <BsX
                          className={`${homeStyles.card_icon} ${homeStyles.cross}`}
                        />
                        <GoCircleSlash
                          className={`${homeStyles.card_icon} ${homeStyles.slash_circle}`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={homeStyles.request_wrapper}>
                    <div className={homeStyles.image_wrapper}>
                      <img src="/images/follower_3.png" alt="" />
                      <p>Olivia</p>
                    </div>
                    <div className={homeStyles.request_action_wrapper}>
                      <strong>87</strong>
                      <p>Polls</p>
                      <div>
                        <AiOutlineCheck
                          className={`${homeStyles.card_icon} ${homeStyles.check}`}
                        />
                        <BsX
                          className={`${homeStyles.card_icon} ${homeStyles.cross}`}
                        />
                        <GoCircleSlash
                          className={`${homeStyles.card_icon} ${homeStyles.slash_circle}`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={homeStyles.request_wrapper}>
                    <div className={homeStyles.image_wrapper}>
                      <img src="/images/follower_2.png" alt="" />
                      <p>Olivia</p>
                    </div>
                    <div className={homeStyles.request_action_wrapper}>
                      <strong>33</strong>
                      <p>Polls</p>
                      <div>
                        <AiOutlineCheck
                          className={`${homeStyles.card_icon} ${homeStyles.check}`}
                        />
                        <BsX
                          className={`${homeStyles.card_icon} ${homeStyles.cross}`}
                        />
                        <GoCircleSlash
                          className={`${homeStyles.card_icon} ${homeStyles.slash_circle}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </Col>
        </Row>
        <Poll props={show} action={handleClose} filesCount={filesCount} />
        <Footer />
        <div className="copyright_wrapper">
            <span>FashionPiks &copy; 2022 </span>
        </div>
      </Container>
    </>
  );
};
export default Home;
