import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter, OpenSansParagraph } from "../../components";
import { Images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <OpenSansParagraph text="9 W 53rd St, New York, NY 10019, USA" />
        <OpenSansParagraph text="+1 212-344-1230" />
        <OpenSansParagraph text="1 212-555-1230" />
      </div>

      <div className="app__footer-links_logo">
        <img src={Images.gericht} alt="footer_logo" />
        <OpenSansParagraph text='"The best way to find yourself is to lose yourself in the service of others."' />
        <img src={Images.spoon} alt="spoon_img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <OpenSansParagraph text="Monday-Friday:" />
        <OpenSansParagraph text="08:00 am - 12:00 am" />
        <OpenSansParagraph text="Saturday-Sunday:" />
        <OpenSansParagraph text="07:00 am - 11:00 pm" />
      </div>
    </div>

    <div className="footer__copyright">
      <OpenSansParagraph text="2021 Gericht. All Rights reserved." />
    </div>
  </div>
);

export default Footer;
