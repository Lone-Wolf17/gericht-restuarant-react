import React from "react";

import "./Newsletter.css";
import SubHeading from "../SubHeading/SubHeading";
import { OpenSansParagraph } from "../Text/Text";
import CustomButton from "../CustomButton/CustomButton";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <OpenSansParagraph text="Subscribe To Our Newsletter" />
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <CustomButton text="Subscribe" />
    </div>
  </div>
);

export default Newsletter;
