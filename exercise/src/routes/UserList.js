import React, { Component } from 'react';
import UserListItem from '../components/UserListItem';
import Header from '../components/Header';
import './UserList.css'

const config = require('.././config')

//params needed to get 20 users from randomuser.me api
const random_user_seed = config.random_user_seed_key;
const random_user_seed_param = 'seed='+random_user_seed;
const random_user_results = 20;
const random_user_results_param = 'results='+random_user_results;
const random_user_country = 'us';
const random_user_country_param = 'nat='+random_user_country;
const random_user_fields_param = 'inc=name,email,phone,picture,id';

//using sessionstorage to persist data
const user_list = window.sessionStorage.getItem(random_user_seed);

export default class UserList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
       loaded_data:[], //variable to hold users returned from random users api
       data_loaded:false //boolean to check if we have users returned from random users api.
    };

  }

  componentDidMount() {
    //grab only 20 users from random users api and store in session storage to avoid repeated calls to random user api
    if (!user_list) {
      this.fetchUsers()
    }else{
      this.setState({ loaded_data: JSON.parse(user_list) });
      this.setState({ data_loaded: true});
    }
  }

  fetchUsers = () => {
    //build the random users api url
    const uri = `${config.ramdom_user_api}?${random_user_results_param}&${random_user_seed_param}&${random_user_country_param}&${random_user_fields_param}`;
    let that = this;
    fetch(uri)
      .then(function (response) {
        if(response.ok) { 
          return response.json();
        }
        throw new Error('No response was received due to slow connection.');
      }).then(function (data) {
        that.setState({ loaded_data: data.results});
        that.setState({ data_loaded: true});
        //store returned users in session storage
        sessionStorage.setItem(random_user_seed, JSON.stringify(data.results));
      }).catch(function(error) {
          console.log('Problem with fetch operation: ', error.message);
      });
  }

  render() {
    let users = <li className="list">Loading...</li>;//diplay loading text while waiting for users to eb returned
    if(this.state.data_loaded){
      users = this.state.loaded_data.map( data => { //loop over returned set of users
        sessionStorage.setItem(data.id.value, JSON.stringify(data)); //store individual user in session storage to avoid another looping when retrieving the user
                return (
                  //display list of users with a UserListItem component
                  <UserListItem
                    key={data.id.value} 
                    user_id = {data.id.value} 
                    name={`${data.name.first} ${data.name.last}`} 
                    email={data.email}
                    phone={data.phone} />
                );
            } );
    }
    return (
      <div className="App">
        <Header buttons={''} />
        <ul className="list_wrap">
          {users}
        </ul>
      </div>
    );
  }
}

