import React from "react";

import "./MenuItem.css";
import { CormorantParagraph, OpenSansParagraph } from "../Text/Text";
import { Drink } from "../../types";

const MenuItem = ({ drink }: { drink: Drink }) => (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <CormorantParagraph text={drink.title} color="#DCCA87" />
      </div>
      <div className="app__menuitem-dash" />
      <div className="app__menuitem-price">
        <CormorantParagraph text={drink.price} />
      </div>
    </div>

    <div className="app__menuitem-sub">
      <OpenSansParagraph color="#AAAAAA" text={drink.tags} />
    </div>
  </div>
);

export default MenuItem;
