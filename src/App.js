import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import "./Component/assets/css/Responsive.css";
import HomeView from "./views/Home/Home";
import Profile from "./views/ProfilePage/Profile";
import TableList from "./views/TableList";
import UserRegistration from "./views/Auth/UserRegistration";
import UserLogin from "./views/Auth/UserLogin";
import FormElement from "./views/Forms/Forms";
import Information from "./views/UserInformation/Infomation";
import Display from "./views/Display/Display";
import Error from "./views/Pages/Error";
import Component from "./views/Pages/Component";
import Faq from "./views/Pages/Faq";
import Charts from "./views/Pages/Charts";
import Support from "./views/Pages/Support";
import AboutUs from "./views/Pages/AboutUs";
import ForgotPassword from "./views/Auth/ForgotPassword";
import NewPassword from "./views/Auth/NewPassword";
import Modals from "./views/Pages/Modals";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeView />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/tablelist" element={<TableList />} />
        <Route exact path="/registration" element={<UserRegistration />} />
        <Route exact path="/userlogin" element={<UserLogin />} />
        <Route exact path="/forms" element={<FormElement />} />
        <Route exact path="/userinfo" element={<Information />} />
        <Route exact path="/headings" element={<Display />} />
        <Route exact path="/error" element={<Error />} />
        <Route exact path="/component" element={<Component />} />
        <Route exact path="/faq" element={<Faq />} />
        <Route exact path="/charts" element={<Charts />} />
        <Route exact path="/support" element={<Support />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        <Route exact path="/newpassword" element={<NewPassword />} />
        <Route exact path="/modals" element={<Modals />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
