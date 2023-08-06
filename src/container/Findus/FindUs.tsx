import React from "react";

import {
  CormorantHeadText,
  CormorantParagraph,
  CustomButton,
  OpenSansParagraph,
  SubHeading,
} from "../../components";
import { Images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <CormorantHeadText text="Find Us" style={{ marginBottom: "3rem" }} />
      <div className="app__wrapper-content">
        <OpenSansParagraph text="Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G" />
        <CormorantParagraph
          text="Opening Hours"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        />
        <OpenSansParagraph text="Mon - Fri: 10:00 am - 02:00 am" />
        <OpenSansParagraph text="Sat - Sun: 10:00 am - 03:00 am" />
      </div>
      <CustomButton style={{ marginTop: "2rem" }} text="Visit Us" />
    </div>
    <div className="app__wrapper_img">
      <img src={Images.findus} alt="findus_img" />
    </div>
  </div>
);

export default FindUs;
