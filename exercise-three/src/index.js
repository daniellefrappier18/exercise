import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ItemLister extends React.Component {
  constructor() {
    super();
     this.state={users:[]};
  }
  componentDidMount(){
    fetch(`http://jsonplaceholder.typicode.com/users`)
    .then(result=>result.json())
    .then(users=>this.setState({users}))
  }

  render() {
    return (
      <div className="all-users">
        <div className="table-row header">
          <div className="user-text user-header">Name</div>
          <div className="user-text user-header">Username</div>
          <div className="user-text user-header">Email</div>
          <div className="user-text user-header">Address</div>
        </div>
        {this.state.users.map(function(user) {
          return (
            <div className="table-row">
              <div className="user-text">{user.name}</div>
              <div className="user-text">{user.username}</div>
              <div className="user-text">
                <a href="mailto:{user.email}">
                  {user.email}
                </a>
              </div>
              <div className="user-text">
                {user.address.street}{user.address.suite} <br/> {user.address.city}, {user.address.zipcode}
              </div>
            </div>
          );
        })}
      </div>
    )
  }
}

ReactDOM.render(
  <ItemLister />,
  document.getElementById('container')
);