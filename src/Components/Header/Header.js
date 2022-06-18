import styles from "../../Styling/Headerstyle/Header.module.css";
import ReactFlagsSelect from "react-flags-select";
import { Button, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Header = (props) => {
  const [selected, setSelected] = useState("");

  return (
    <div>
      <Navbar
        expand="md"
        id="navBar"
        className={`${props.className} ${styles.header_one}`}
      >
        <div className="top_header">
          <img src="/images/mainlogo.png" alt="" className="image_block" />
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={styles.togggle}
          />
        </div>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav style={{ marginLeft: "auto" }} className={styles.nav_links}>
              <Nav.Link href="#home" className={styles.nav_item}>
                Home
              </Nav.Link>
              <Nav.Link href="#link" className={styles.nav_item}>
                About
              </Nav.Link>
              <Link to="/signup">
                <Nav.Link href="#link" className={styles.nav_item}>
                  Sign Up
                </Nav.Link>
              </Link>
              <Link to="/contact">
                <Nav.Link href="#link" className={styles.nav_item}>
                  Help
                </Nav.Link>
              </Link>
              <ReactFlagsSelect
                className={`${styles.country_dropdown} ${props.className}`}
                selected={selected}
                onSelect={(code) => setSelected(code)}
              />
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </div>
  );
};
export default Header;
