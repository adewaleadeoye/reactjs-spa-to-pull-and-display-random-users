import React, {Component} from 'react';
import './UserInfo.css';

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
       img_loaded:false
    };

  }

  loadingSpinner = () => {
    if (!this.state.img_loaded) {
      return;
    }
    return <div class="lds-dual-ring"></div>;
  }

  handleImageStatus = () =>{
    if(!this.state.img_loaded){
      this.setState({img_loaded:true})
      console.log(this.state.img_loaded)
    }
  }
  
  render() {  
    return (
        <div className="container">
        <div className="card">
          <figure className="front">
            {this.loadingSpinner()}
            <img src={this.props.picture} className="img" alt={this.props.name} onLoad={() => this.handleImageStatus}/>
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

