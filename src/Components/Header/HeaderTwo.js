import styles from "../../Styling/Headerstyle/HeaderTwo.module.css";
import {
  Nav,
  Container,
  Navbar,
  Form,
  FormControl,
  NavDropdown,
} from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
const HeaderTwo = () => {
  return (
    <>
      <Navbar
        expand="md"
        className={`${styles.nav_bar}`}
        id="header-two-navbar"
        sticky="top"
      >
        <Container fluid className={styles.flex_align}>
          <Navbar.Brand>
            <div className={styles.brand_logo_wrapper}>
              <img src="/images/mainlogo.png" alt="brand logo" />
            </div>
          </Navbar.Brand>
          <div className={styles.wrapper}>
            <Form className={styles.search_field_hide}>
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

            <Nav className={styles.nav_icons_wrapper}>
              <Nav.Link>
                <div className={`${styles.header_icons_wrapper} home_icon`}>
                  <Link to="/">
                    <img src="/images/home.png" alt="home icon" />
                  </Link>
                </div>
              </Nav.Link>
              <Nav.Link>
                <div className={`${styles.header_icons_wrapper}`}>
                  <img
                    src="/images/account.png"
                    alt="account icon account_icon"
                  />
                </div>
              </Nav.Link>
              <Nav.Link>
                <div
                  className={`${styles.header_icons_wrapper} notification_icon`}
                >
                  <img src="/images/notification.png" alt="notification icon" />
                </div>
              </Nav.Link>
              <div
                className={`${styles.account_wrapper} d-flex justify-content-center align-items-center account_wrapper`}
              >
                <div>
                  <img
                    src="/images/person.png"
                    alt="user_image"
                    className={`${styles.user_image_wrapper}`}
                  />
                </div>
                <NavDropdown
                  title="Caroline Sharoff"
                  className={styles.dropdown_title}
                  style={{ color: "#ea228f" }}
                  id={`offcanvasNavbarDropdown-expand-lg`}
                >
                  <div className={styles.dropdown_wrapper}>
                    <NavDropdown.Item className={styles.dropdown_item}>
                      <Link to="/profile">My Profile</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className={styles.dropdown_item}>
                      <Link to="/settings">Profile Settings</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className={styles.dropdown_item}>
                      <Link to="">Logout</Link>
                    </NavDropdown.Item>
                  </div>
                </NavDropdown>
              </div>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderTwo;
