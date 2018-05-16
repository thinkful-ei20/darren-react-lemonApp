import React from 'react';


export default function FoodItem(props){

  return(
      <div className="dropdown-content">

        <button className='food-item' onClick={props.onClick}>
          <div>{props.name}</div>
          <div>clicks:{props.clicks}</div> 
          <div>${props.totalValue}</div>          
        </button>

        
      </div>
  );
}