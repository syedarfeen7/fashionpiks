import {
  Container,
  Row,
  Col,
  Tabs,
  Tab,
  Form,
  FormControl,
} from "react-bootstrap";
import styles from "../../../Styling/TabsStyle/Followers.module.css";
import All from "./All";
import Following from "./Following";
import { AiOutlineSearch } from "react-icons/ai";
import Blocked from "./Blocked";

const FollowersTab = () => {
  return (
    <>
      <Container className={styles.followers_container} fluid>
        <Row>
          <Col>
            <div className={`${styles.followers_tab} tabbb followers_tab`}>
              <Tabs
                defaultActiveKey="all"
                id="uncontrolled-tab-example"
                className={`${styles.abc} mb-3`}
              >
                <Tab eventKey="all" title="All">
                  <All />
                </Tab>
                <Tab eventKey="following" title="Following">
                  <Following />
                </Tab>
                <Tab eventKey="blocked" title="Blocked">
                  <Blocked />
                </Tab>
              </Tabs>
              <div className={styles.follwers_search_wrapper}>
                <Form className="d-flex">
                  <div className={styles.search_wrapper}>
                    <FormControl
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      className={`${styles.header_search_field}`}
                    />
                    <div>
                      <AiOutlineSearch className={styles.search_icon} />
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default FollowersTab;
