import React from 'react';
import FoodItem from './food-item'
import './dropdown-contents.css'

export default function Dropdown(props){

  return(
      <div className="dropdown-content">

        <FoodItem 
        name='Lemonade'
        onClick={(e) => {props.handleLemonClicks(); props.handleTotalClicks();}}
        clicks={props.lemonClicksTotal} 
        totalValue={props.totalLemonValue}       
        />

        <FoodItem 
        name='Hotdog'        
        onClick={(e) => {props.handleHotdogClicks(); props.handleTotalClicks();}}
        clicks={props.hotdogClicksTotal}        
        />

        <FoodItem 
        name='Hamburger'
        onClick={(e) => {props.handleHamburgerClicks(); props.handleTotalClicks();}}
        clicks={props.hamburgerClicksTotal}        
        />

        
      </div>
  );
}