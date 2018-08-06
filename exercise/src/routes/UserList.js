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
const user_list = sessionStorage.getItem(random_user_seed);

// const styles = {
//   list_wrap:{
//       width: '45%',
//       margin: '5% auto',
//       border: '1px solid rgba(0, 0, 0, 0.1)',
//       padding: '5px 5px 0 5px',
//   }
// }

export default class UserList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
       loaded_data:[],
       data_loaded:false
    };

  }

  componentDidMount() {
    var that = this;
    //grab only 20 users and store in session storage to avoid repeated calls to random user api
    if (!user_list) {
      const uri = `${config.ramdom_user_api}?${random_user_results_param}&${random_user_seed_param}&${random_user_country_param}&${random_user_fields_param}`;
      fetch(uri)
      .then(function (response) {
        if(response.ok) { 
          return response.json();
        }
        throw new Error('No response was received due to slow connection.');
      }).then(function (data) {
        //console.log(JSON.stringify(data.results));
        that.setState({ loaded_data: data.results});
        that.setState({ data_loaded: true});
        sessionStorage.setItem(random_user_seed, JSON.stringify(data.results));
      }).catch(function(error) {
        console.log('Problem with fetch operation: ', error.message);
      });
    }else{
      that.setState({ loaded_data: JSON.parse(user_list) });
      that.setState({ data_loaded: true});
    }
  }


  render() {
    let users = <li style={{ textAlign: 'center' }}>Loading...</li>;
    if(this.state.data_loaded){
      users = this.state.loaded_data.map( data => {
        sessionStorage.setItem(data.id.value, JSON.stringify(data));
                return (
                  <UserListItem 
                    key={data.id.value} 
                    user_id = {data.id.value} 
                    name={`${data.name.first} ${data.name.last}`} 
                    email={data.email}
                    phone={data.phone} />
                );
            } );
    }else{
      users = <li style={{ textAlign: 'center' }}>Users could not be loaded</li>;
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

