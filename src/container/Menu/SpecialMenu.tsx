import React from "react";

import { SubHeading, MenuItem, CormorantHeadText, CustomButton } from "../../components";
import { Data, Images } from "../../constants";
import "./SpecialMenu.css";
import { Drink } from "../../types";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <CormorantHeadText text="Today's Special" />
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <DrinkMenu title="Wine & Beer" drinks={Data.wines} />
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={Images.menu} alt="menu__imge" />
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <DrinkMenu title="Cocktails" drinks={Data.cocktails} />
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <CustomButton text="View More" />
    </div>
  </div>
);

type DrinkMenuProps = {
  title: string;
  drinks: Drink[];
};
const DrinkMenu = ({ title, drinks }: DrinkMenuProps) => (
  <>
    <p className="app__specialMenu-menu_heading">{title}</p>
    <div className="app__specialMenu-menu_items">
      {drinks.map((drink, index) => (
        <MenuItem key={drink.title + index} drink={drink} />
      ))}
    </div>
  </>
);

export default SpecialMenu;
