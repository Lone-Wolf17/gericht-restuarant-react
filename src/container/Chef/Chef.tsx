import React from "react";

import { Images } from "../../constants";
import {
  CormorantHeadText,
  OpenSansParagraph,
  SubHeading,
} from "../../components";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={Images.chef} alt="chef_image" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <CormorantHeadText text="What we believe in" />

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={Images.quote} alt="quote_image" />
          <OpenSansParagraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit ." />
        </div>
        <OpenSansParagraph text=" auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. " />
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <OpenSansParagraph text="Chef & Founder" />
        <img src={Images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
