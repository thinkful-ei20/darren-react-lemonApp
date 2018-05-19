import React from 'react';
import DropdownContents from './dropdown-contents'

export default function Dropdown(props){


  if(!props.dropdownState){
    return (
      <div className="dropdown">
        <button onClick={props.handleDropdownClick} className="dropbtn">Let's Sell Some Stuff!</button>     
      </div>
    )
  }
  
  return(
    <div className="dropdown">
      
      <button onClick={props.handleDropdownClick} className="dropbtn">Collapse</button>         
      
      <DropdownContents 
      lemonClicksTotal={props.totalLemonClicksState}
      handleLemonClicks={props.handleLemonClickState}
      totalLemonValue={props.totalLemonValueState}

      hotdogClicksTotal={props.totalHotdogClicksState}
      handleHotdogClicks={props.handleHotdogClickState}
      totalHotdogValue={props.totalHotdogValueState}

      hamburgerClicksTotal={props.totalHamburgerClicksState}
      handleHamburgerClicks={props.handleHamburgerClickState}
      totalHamburgerValue={props.totalHamburgerValueState}

      handlePurchase={props.handlePurchaseState}
      />
    </div>
  );
}
