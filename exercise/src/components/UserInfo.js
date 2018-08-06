import React, {Component} from 'react';
import './UserInfo.css';

export default class UserListItem extends Component {
  render() {  
    return (
        <div className="container">
        <div className="card">
          <figure className="front">
            <img src={this.props.picture} className="img" alt={this.props.name}/>
            <div className="caption">
              <h2 className="name">{this.props.name}</h2>
              <p className="email_phone">{this.props.email}</p>
              <p className="email_phone">{this.props.phone}</p>
            </div>			
          </figure>
        </div>
      </div>
    );
  }
}

