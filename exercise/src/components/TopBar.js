import React, {Component} from 'react';
import Button from './Button';
import Badge from './Badge';
import Header from './Header';

export default class TopBar extends Component {
  render() {
    let buttonState;
    if(!this.props.loggedIn){
      buttonState =  <div>
          <Button style={{backgroundColor: 'blue', color: 'white'}} children='Login' handleLoginButtonClick={this.props.handleLoginButtonClick}></Button>
          <Button style={{backgroundColor: 'red', color: 'white'}} children='Signup'></Button>
        </div>
    }else{
      buttonState = <div>
        <Badge style={{backgroundColor: '#dcdcdc', color: '#333'}} children='AA' ></Badge>
        <Button style={{backgroundColor: '#f54336', color: 'white'}} children='Logout' handleLoginButtonClick={this.props.handleLoginButtonClick}></Button>
      </div>
    }
    return (
      <Header buttons={buttonState} />
    );
  } 
}


