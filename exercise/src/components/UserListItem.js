import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const styles = {
  list: {
    listStyle: 'none',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    backgroundImage: 'linear-gradient(90deg,rgb(102, 63, 180) 10px, #EEE 10px,#EEE 11px,transparent 11px)',
    padding: '10px 15px 10px 25px',
    border: '1px solid #CCC',
    boxShadow: 'inset 1px 1px 0 rgba(255, 255, 255, 0.5)',
    marginBottom: '5px',
    width: '100%',
    boxSizing: 'border-box',
    cursor: 'pointer',
    borderRadius: '3px',
  },
  name:{
    fontWeight: 'bold',
    fontSize: '1.2em',
    margin:0,
    textTransform:'capitalize'
  },
  email_phone:{
    letterSpacing: '1px',
    fontSize: '68.5%',
    margin:0
  },
  link:{
    textDecoration: 'none',
    color:'#4e4d4d'
  }
};
export default class UserListItem extends Component {
  render() {
      
    return (
      <li style={{...styles.list}} >
        <Link to={'/user-detail/' + this.props.user_id} key={this.props.user_id} style={{...styles.link}}>
          <h2 style={{...styles.name}}>{this.props.name}</h2>
          <p style={{...styles.email_phone}}>{this.props.email}</p>
          <p style={{...styles.email_phone}}>{this.props.phone}</p>
        </Link>
      </li>
    );
  }
}

