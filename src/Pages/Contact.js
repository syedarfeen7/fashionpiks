import { Container } from "react-bootstrap";
import ContactForm from "../Components/Forms/Contact";
import Header from "../Components/Header/Header";
import "../Styling/Globalstyle/global.css";
const Contact = () => {
  return (
    <>
      <div className="bg-pink-white">
        <Header />
        <Container fluid className="main_grid_container">
          <ContactForm />
        </Container>
      </div>
    </>
  );
};
export default Contact;
