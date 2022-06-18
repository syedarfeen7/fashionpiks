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
import Footer from "../../Footer/Footer";
import Blocked from "../Followers/Blocked";
import Pending from "./Pending";
const RequestsTab = () => {
  return (
    <>
      <Container className={styles.followers_container}>
        <Row>
          <Col>
            <div className={`${styles.followers_tab} tabbb followers_tab`}>
              <Tabs
                defaultActiveKey="pending"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="pending" title="Pending">
                  <Pending />
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
                      <img
                        src="/images/searchicon.png"
                        alt="user"
                        className={styles.search_icon}
                      />
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
export default RequestsTab;
