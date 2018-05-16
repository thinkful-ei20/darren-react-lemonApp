import React from 'react';
import DropdownContents from './dropdown-contents'

export default function Dropdown(props){


  if(!props.dropdownState){
    return (
      <div className="dropdown">
        <button onClick={props.handleDropdownClick} className="dropbtn">Dropdown!</button>     
      </div>
    )
  }
  
  return(
    <div className="dropdown">
      
      <button onClick={props.handleDropdownClick} className="dropbtn">Dropdown!</button>         
      
      <DropdownContents 
      lemonClicksTotal={props.totalLemonClicksState}
      handleLemonClicks={props.handleLemonClickState}
      totalLemonValue={props.totalLemonValueState}

      hotdogClicksTotal={props.totalHotdogClicksState}
      handleHotdogClicks={props.handleHotdogClickState}

      hamburgerClicksTotal={props.totalHamburgerClicksState}
      handleHamburgerClicks={props.handleHamburgerClickState}

      handleTotalClicks={props.handTotalClicksState}
      />
    </div>
  );
}
