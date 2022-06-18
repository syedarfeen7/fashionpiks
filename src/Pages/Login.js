import { Container } from "react-bootstrap";
import LoginForm from "../Components/Forms/Login";
import Header from "../Components/Header/Header";
import "../Styling/Globalstyle/global.css";
const Login = () => {
  return (
    <div className="bg-pink-white">
      <Header />
      <Container fluid className="main_grid_container">
        <LoginForm />
      </Container>
    </div>
  );
};
export default Login;
