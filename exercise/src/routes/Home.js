import React, { Component } from 'react';

import TopBar from '../components/TopBar';
import HomeContent from '../components/HomeContent';

export default class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false 
    };
    this.handleLoginButtonClick = this.handleLoginButtonClick.bind(this);
  }

  handleLoginButtonClick = () => {
    if(!this.state.loggedIn){
      this.setState({loggedIn: true})
    }else{
      this.setState({loggedIn: false})
    }
  }

  render() {
    return (
      <div className="App">
        <TopBar loggedIn={this.state.loggedIn} handleLoginButtonClick={this.handleLoginButtonClick}/>
        <HomeContent loggedIn={this.state.loggedIn} handleLoginButtonClick={this.handleLoginButtonClick}/>
      </div>
    );
  }
}

