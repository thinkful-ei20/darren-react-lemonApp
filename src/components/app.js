import React from 'react';
import './app.css';
import Dropdown from './dropdown';

let autoClickerRefs = [
  
];



export default class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      dropdownEngaged: false,      
      lemonade: {
        clicks: 0,
        valueTotal: 0,
        increment: 2
      },
      hotdog: {
        clicks: 0,
        valueTotal: 0,
        increment: 3
      },
      hamburger: {
        clicks: 0,
        valueTotal: 0,
        increment: 5
      }
    }
  }

  handleDropdown(){    
    this.setState({
      dropdownEngaged: !this.state.dropdownEngaged
    });
  }

  handleLemonClicks(){   
    this.setState({
      lemonade : Object.assign({},
        this.state.lemonade,
        {clicks: this.state.lemonade.clicks + 1},
        {valueTotal:this.state.lemonade.valueTotal + this.state.lemonade.increment},
      )
    });
    console.log('lemonade: ',this.state.lemonade.clicks +1);
  }

  handleHotdogClicks(){   
    this.setState({
      hotdog : Object.assign({},
        this.state.hotdog,
        {clicks: this.state.hotdog.clicks + 1},
        {valueTotal:this.state.hotdog.valueTotal + this.state.hotdog.increment},
      )
    });
    console.log('hotdog: ',this.state.hotdog.clicks + 1);
    
  }

  handleHamburgerClicks(){   
    this.setState({
      hamburger : Object.assign({},
        this.state.hamburger,
        {clicks: this.state.hamburger.clicks + 1},
        {valueTotal:this.state.hamburger.valueTotal + this.state.hamburger.increment},
      )
    });
    console.log('hamburger: ',this.state.hamburger.clicks + 1);
  }

  handleAutoHotdog(){
    console.log('click');
    this.setState({
      hotdog: Object.assign({},
        this.state.hotdog,
        // {clicks: this.state.hotdog.clicks + 1},
        {valueTotal:this.state.hotdog.valueTotal + this.state.hotdog.increment},
      )
    });    
  }  
  
  purchaseAutoClicker(){
    const grandTotalValue = this.state.lemonade.valueTotal + this.state.hotdog.valueTotal + this.state.hamburger.valueTotal;

    if(grandTotalValue > 75 && autoClickerRefs.length < 1){     
        autoClickerRefs.push(setInterval(() => this.handleAutoHotdog(),1000));    
    } else if (grandTotalValue > 150 && autoClickerRefs.length < 2){
      autoClickerRefs.push(setInterval(() => this.handleAutoHotdog(),1000)); 
    }    
  }
  


render(){
  const grandTotalClicks = this.state.lemonade.clicks + this.state.hotdog.clicks + this.state.hamburger.clicks;
  const grandTotalValue = this.state.lemonade.valueTotal + this.state.hotdog.valueTotal + this.state.hamburger.valueTotal;

  return(
    <div>
      <h3 className='total-clicks'>
        Total Clicks: {grandTotalClicks}
      </h3>
      <h3 className='total-clicks'>
        Total Value: ${grandTotalValue}
      </h3>
      <div className='app-div'>  

        <Dropdown 
          dropdownState={this.state.dropdownEngaged}
          handleDropdownClick={() => this.handleDropdown()}

          totalLemonClicksState={this.state.lemonade.clicks}
          handleLemonClickState={() => this.handleLemonClicks()}
          totalLemonValueState={this.state.lemonade.valueTotal}

          totalHotdogClicksState={this.state.hotdog.clicks}
          handleHotdogClickState={() => this.handleHotdogClicks()}
          totalHotdogValueState={this.state.hotdog.valueTotal}


          totalHamburgerClicksState={this.state.hamburger.clicks}
          handleHamburgerClickState={() => this.handleHamburgerClicks()}
          totalHamburgerValueState={this.state.hamburger.valueTotal}

          handlePurchaseState={()=> this.purchaseAutoClicker()}

   


          />
        
      </div>
    </div>
  );
}

}