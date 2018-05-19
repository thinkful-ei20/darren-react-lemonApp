import React from 'react';
import FoodItem from './food-item'
import Employees from './employees'

import './dropdown-contents.css'

export default function Dropdown(props){

  return(
      <div className="dropdown-content">

        <FoodItem 
        name='Lemonade'
        onClick={(e) => {props.handleLemonClicks();}}
        clicks={props.lemonClicksTotal} 
        totalValue={props.totalLemonValue}       
        />

        <FoodItem 
        name='Hotdog'        
        onClick={(e) => {props.handleHotdogClicks();}}
        clicks={props.hotdogClicksTotal} 
        totalValue={props.totalHotdogValue}       
        />

        <FoodItem 
        name='Hamburger'
        onClick={(e) => {props.handleHamburgerClicks();}}
        clicks={props.hamburgerClicksTotal}      
        totalValue={props.totalHamburgerValue} 
        />

        <Employees
        name='Hotdog Vendor'
        onClick={(e) => {props.handlePurchase();}}
        />
        
      </div>
  );
}