import { Container } from "react-bootstrap";
import HeaderTwo from "../Components/Header/HeaderTwo";
import Hero from "../Components/HeroSection/Hero";
import HomeTabs from "../Components/Tab/Tab";

const Profile = () => {
  return (
    <>
      <HeaderTwo />
      <Container fluid className="main_container_two main_container_three">
        <div className="inner_wrapper_global">
          <Hero />
          <HomeTabs />
        </div>
      </Container>
    </>
  );
};

export default Profile;
