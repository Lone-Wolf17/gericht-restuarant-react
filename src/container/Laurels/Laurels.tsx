import React from "react";

import {
  CormorantHeadText,
  CormorantParagraph,
  OpenSansParagraph,
  SubHeading,
} from "../../components";
import { Images, Data } from "../../constants";
import "./Laurels.css";
import { Award } from "../../types";

type AwardCardProps = {
  award: Award;
};
const AwardCard = ({ award: { imgUrl, title, subtitle } }: AwardCardProps) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="award_image" />
    <div className="app__laurels_awards-card_content">
      <CormorantParagraph text={title} style={{ color : "#DCCA8" }} />
      <OpenSansParagraph text={subtitle} />
    </div>
  </div>
);

const Laurels = () => <div className="app__bg app__wrapper section__padding" id="awards">
  <div className="app__wrapper_info">
    <SubHeading title="Awards & recognition"/>
    <CormorantHeadText text="Our Laurels"/>
    <div className="app__laurels_awards">
      {Data.awards.map(award => <AwardCard award={award} key={award.title} />)}
    </div>
  </div>

  <div className="app__wrapper_img">
    <img src={Images.laurels} alt="laurels_img" />
  </div>
</div>;

export default Laurels;
