import React from 'react';

export default function Employees(props){
  return (
    <div className='dropdown-employees'>

      <button className='employee-name' onClick={props.onClick}>
      <div>{props.name}</div>
      <div>Hotdogs sold:{props.clicks}</div> 
      <div>${props.totalValue}</div>          
    </button>

    </div>
  );
}