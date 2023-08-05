import React from "react";

import "./AboutUs.css";
import { Images } from "../../constants";
import { CormorantHeadText, CustomButton, OpenSansParagraph } from "../../components";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={Images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <CormorantHeadText text="About Us" />
        <SpoonImg />
        <OpenSansParagraph
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et."
        />
        <CustomButton text="Know More" />
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={Images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <CormorantHeadText text="Our History" />
        <SpoonImg />
        <OpenSansParagraph
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
    adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu
    proin mauris et."
        />
        <CustomButton text="Know More" />
      </div>
    </div>
  </div>
);

const SpoonImg = () => (
  <img src={Images.spoon} alt="about_spoon" className="spoon__img" />
);

export default AboutUs;
