import React, {Component} from 'react';

const styles = {
  badge: {
    borderRadius:'50%',
    padding: 8,
    display:'inline-block',
    width: 30,
    height: 30,
    textAlign: 'center',
    lineHeight: '30px',
    fontWeight: 700
  }
};
export default class Badge extends Component {
  render() {
    return (
      <div style={{...styles.badge, ...this.props.style}}>
        {this.props.children}
      </div>
    );
  }
}

