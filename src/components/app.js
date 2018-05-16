import React from 'react';
import './app.css';
import Dropdown from './dropdown';

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
    console.log('hotdog: ',this.state.hotdog + 1);
  }

  handleHamburgerClicks(){   
    this.setState({
      hamburger : Object.assign({},
        this.state.hamburger,
        {clicks: this.state.hamburger.clicks + 1},
        {valueTotal:this.state.hamburger.valueTotal + this.state.hamburger.increment},
      )
    });
    console.log('hamburger: ',this.state.hamburgerClicks + 1);
  }


render(){
  return(
    <div>
      <h3 className='total-clicks'>
        Total Clicks: {this.state.lemonade.clicks + this.state.hotdog.clicks + this.state.hamburger.clicks}
      </h3>
      <h3 className='total-clicks'>
        Total Value: ${this.state.lemonade.valueTotal + this.state.hotdog.valueTotal + this.state.hamburger.valueTotal}
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


   


          />
        
      </div>
    </div>
  );
}

}