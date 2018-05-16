import React from 'react';
import './app.css';
import Dropdown from './dropdown';

export default class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      dropdownEngaged: false,      
      lemon: {
        clicks: 0,
        valueTotal: 0,
        increment: 2
      },
      hotdogClicks: 0,
      hamburgerClicks: 0,
      totalClicks: 0
    }
  }

  handleDropdown(){    
    this.setState({
      dropdownEngaged: !this.state.dropdownEngaged
    });
  }

  handleLemonClicks(){   
    this.setState({
      lemon : Object.assign({},
        this.state.lemon,
        {clicks: this.state.lemon.clicks + 1},
        {valueTotal:this.state.lemon.valueTotal + this.state.lemon.increment},
      )
    });
    console.log('lemon: ',this.state.lemon.clicks +1);
  }
  handleHotdogClicks(){   
    this.setState({
      hotdogClicks: this.state.hotdogClicks + 1
    });
    console.log('hotdog: ',this.state.hotdogClicks + 1);
  }
  handleHamburgerClicks(){   
    this.setState({
      hamburgerClicks: this.state.hamburgerClicks + 1
    });
    console.log('hamburger: ',this.state.hamburgerClicks + 1);
  }
  handleTotalClicks(){
    this.setState({
      totalClicks: this.state.lemon.clicks + this.state.hotdogClicks + this.state.hamburgerClicks + 1
    });
  }


render(){
  return(
    <div>
      <h3>
        Total: {this.state.totalClicks}
      </h3>
      <div className='app-div'>  

        <Dropdown 
          dropdownState={this.state.dropdownEngaged}
          handleDropdownClick={() => this.handleDropdown()}

          totalLemonClicksState={this.state.lemon.clicks}
          handleLemonClickState={() => this.handleLemonClicks()}
          totalLemonValueState={this.state.lemon.valueTotal}

          totalHotdogClicksState={this.state.hotdogClicks}
          handleHotdogClickState={() => this.handleHotdogClicks()}

          totalHamburgerClicksState={this.state.hamburgerClicks}
          handleHamburgerClickState={() => this.handleHamburgerClicks()}

          handTotalClicksState={() => this.handleTotalClicks()}

          />
        
      </div>
    </div>
  );
}

}