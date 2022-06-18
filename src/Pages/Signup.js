import "../Styling/Globalstyle/global.css";
import SignupForm from "../Components/Forms/Signup";
import Header from "../Components/Header/Header";

import { Container } from "react-bootstrap";
const Signup = () => {
  return (
    <>
      <div className="bg-pink-white">
        <Header />
        <Container fluid className="main_grid_container">
          <SignupForm />
        </Container>
      </div>
    </>
  );
};
export default Signup;
