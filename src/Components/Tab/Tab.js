import { Col, Row, Tabs, Tab, Container } from "react-bootstrap";
import Footer from "../Footer/Footer";
import About from "../TabComponents/About/About";
import FollowersTab from "../TabComponents/Followers/FollowersTabs";
import Polls from "../TabComponents/Polls/Polls";
import RequestsTab from "../TabComponents/Requests/RequestsTabs";

const HomeTabs = (props) => {
  console.log(props);
  return (
    <>
      <Container fluid className="home-tab-grid-container">
        <Row>
          <Col>
            <div className="tabbb">
              <Tabs
                defaultActiveKey={props.props ? "" : "polls"}
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                
                <Tab eventKey="polls" title="Polls">
                  <Polls props={true}/>
                </Tab>
                <Tab eventKey="about" title="About">
                  <About />
                </Tab>
                <Tab eventKey="followers" title="Followers">
                  <FollowersTab />
                </Tab>
                <Tab eventKey="requests" title="Requests">
                  <RequestsTab />
                </Tab>
              </Tabs>
            </div>
          </Col>
        </Row>
      </Container>
      {props.props ? (
        <></>
      ) : (
        <>
          <Footer />

          <div className="copyright_wrapper">
            <span>FashionPiks &copy; 2022 </span>
          </div>
        </>
      )}
    </>
  );
};

export default HomeTabs;
