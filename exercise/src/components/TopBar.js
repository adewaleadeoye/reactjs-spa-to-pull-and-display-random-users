import React, {Component} from 'react';
import Button from './Button';
import Badge from './Badge';
import Header from './Header';

export default class TopBar extends Component {
  render() {
    let buttonState;
    if(!this.props.loggedIn){
      buttonState =  <div>
          <Button class_name={'login_top_bar'} style={{backgroundColor: 'blue', color: 'white'}} children='Login' handleLoginButtonClick={this.props.handleLoginButtonClick}></Button>
          <Button style={{backgroundColor: 'red', color: 'white'}} children='Signup'></Button>
        </div>
    }else{
      buttonState = <div>
        <Badge class_name={'badge'} style={{backgroundColor: '#dcdcdc', color: '#333'}} initials='AA' ></Badge>
        <Button class_name={'logout_top_bar'} style={{backgroundColor: '#f54336', color: 'white'}} children='Logout' handleLoginButtonClick={this.props.handleLoginButtonClick}></Button>
      </div>
    }
    return (
      <Header buttons={buttonState} />
    );
  } 
}


