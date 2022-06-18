import "../src/Styling/Globalstyle/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
import Signup from "./Pages/Signup";
import ProfileSetup from "./Pages/ProfileSetup";
import Profile from "./Pages/Profile";
import StoreOne from "./Components/Store/StoreOne";
import FAQ from "./Components/FAQ/FAQ";
import Settings from "./Pages/Settings";
import HomePage from "./Pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/setup" element={<ProfileSetup />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/storeone" element={<StoreOne />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
