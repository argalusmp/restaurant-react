import React from 'react';
import {images, data} from '../../constants';
import { SubHeading, MenuItem } from "../..//components";
import './SpecialMenu.css';


const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
  <div className="app__specialMenu-title">
    <SubHeading title="Menu that fits your palatte" />
    <h1 className="headtext__cormorant">Today&apos;s Special Menu</h1>
  </div>

  <div className="app__specialMenu-menu">
    <div className="app__specialMenu-menu_wine  flex__center">
      <p className="app__specialMenu-menu_heading">Foods</p>
      <div className="app__specialMenu_menu_items">
        {data.foods.map((food, index) => (
          <MenuItem key={food.title + index} title={food.title} price={food.price} tags={food.tags} />
        ))}
      </div>
    </div>

    <div className="app__specialMenu-menu_img">
      <img src={images.menu} alt="menu__img" />
    </div>

    <div className="app__specialMenu-menu_cocktails  flex__center">
      <p className="app__specialMenu-menu_heading">Mocktails</p>
      <div className="app__specialMenu_menu_items">
        {data.mocktails.map((mocktail, index) => (
          <MenuItem key={mocktail.title + index} title={mocktail.title} price={mocktail.price} tags={mocktail.tags} />
        ))}
      </div>
    </div>
  </div>

  <div style={{ marginTop: 15 }}>
    <button type="button" className="custom__button">View More</button>
  </div>
</div>
);

export default SpecialMenu;
