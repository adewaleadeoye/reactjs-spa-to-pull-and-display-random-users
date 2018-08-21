import React, {Component} from 'react';

const styles = {
  button: {
    width:   100,
    height: 40,
    margin:  8,
    padding: 8,
    display:'inline-block'
  }
};
export default class Button extends Component {
  render() {
    return (
      <button className={this.props.class_name} style={{...styles.button, ...this.props.style}} onClick={this.props.handleLoginButtonClick}>
        {this.props.children}
      </button>
    );
  }
}

