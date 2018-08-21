import React, {Component} from 'react';
import Button from './Button';

export default class HomeContent extends Component {
  render() {
    let buttonState;
    if(!this.props.loggedIn){
      buttonState = 'Login'
    }else{
      buttonState = 'Logout'
    }
    return (
      <div>
        <Button class_name={'login_home_content'} children={buttonState} handleLoginButtonClick={this.props.handleLoginButtonClick}></Button>
      </div>
    );
  }
}
