import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../routes/UserList.css'

export default class UserListItem extends Component {
  render() {
      
    return (
      <li className="list" >
        <Link to={'/user-detail/' + this.props.user_id} key={this.props.user_id} className="link">
          <h2 className="name">{this.props.name}</h2>
          <p className="email_phone">{this.props.email}</p>
          <p className="email_phone">{this.props.phone}</p>
        </Link>
      </li>
    );
  }
}

