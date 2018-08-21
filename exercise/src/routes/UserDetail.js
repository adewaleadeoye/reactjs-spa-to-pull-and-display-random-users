import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import UserInfo from '../components/UserInfo';
import Header from '../components/Header';

const styles={
  link:{
    textDecoration:'none',
    padding: '15px 32px',
    backgroundColor:'#7d4be2',
    display: 'inline-block',
    fontSize: '16px',
    color:'#fff',
    marginTop:'10px'
  }
}

export default class UserDetail extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
       loaded_user:null,
       user_loaded:false
    };
  }

  componentDidMount () {
    this.fetchUser();
  }


  fetchUser = () => {
    if ( this.props.match.params.id ) {
        const user_data = sessionStorage.getItem(this.props.match.params.id);//retrieve user from session storage
        if(user_data){
          this.setState({loaded_user:JSON.parse(user_data)})
          this.setState({user_loaded:true})
        }

    }
  }

  render() {
    let user = <p style={{ textAlign: 'center' }}>Loading!</p>;
    if(this.state.user_loaded){
      console.log(this.state.loaded_user);
      user = <UserInfo 
                  name={`${this.state.loaded_user.name.first} ${this.state.loaded_user.name.last}`}
                  picture={this.state.loaded_user.picture.large}
                  email={this.state.loaded_user.email}
                  phone={this.state.loaded_user.phone}/>;
    }else{
      user = <p style={{ textAlign: 'center' }}>This user does not exist</p>;
    }
    return (
      <div className="App">
        <Header buttons={''} />
        <Link to={'/users-list/'} style={{...styles.link}}>Back</Link>
        {user}
      </div>
    );
  }
}

