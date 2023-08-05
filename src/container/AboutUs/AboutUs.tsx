import React from "react";

import "./AboutUs.css";
import { Images } from "../../constants";
import { CustomButton } from "../../components";

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
        <HeadText text="About Us" />
        <SpoonImg />
        <ParagraphText
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
        <HeadText text="Our History" />
        <SpoonImg />
        <ParagraphText
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
    adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu
    proin mauris et."
        />
        <CustomButton text="Know More" />
      </div>
    </div>
  </div>
);

const HeadText = ({ text }: { text: string }) => (
  <h1 className="headtext__cormorant">{text}</h1>
);

const SpoonImg = () => (
  <img src={Images.spoon} alt="about_spoon" className="spoon__img" />
);

const ParagraphText = ({ text }: { text: string }) => (
  <p className="p__opensans">{text}</p>
);

export default AboutUs;
