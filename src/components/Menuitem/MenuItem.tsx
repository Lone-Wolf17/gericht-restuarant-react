import React from "react";

import "./MenuItem.css";
import { CormorantParagraph, OpenSansParagraph } from "../Text/Text";
import { Drink } from "../../types";

const MenuItem = ({ drink }: { drink: Drink }) => (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <CormorantParagraph text={drink.title} style={{ color: "#DCCA87" }} />
      </div>
      <div className="app__menuitem-dash" />
      <div className="app__menuitem-price">
        <CormorantParagraph text={drink.price} />
      </div>
    </div>

    <div className="app__menuitem-sub">
      <OpenSansParagraph text={drink.tags} style={{ color: "#AAAAAA" }} />
    </div>
  </div>
);

export default MenuItem;
