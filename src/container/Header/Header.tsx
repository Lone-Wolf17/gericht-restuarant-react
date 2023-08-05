import React from "react";

import { CustomButton, SubHeading } from "../../components";
import { Images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus
      </p>
      <CustomButton text="Explore Menu" />
    </div>

    <div className="app__wrapper_img app__header-img">
      <img src={Images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
