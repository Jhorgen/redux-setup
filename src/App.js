import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import updateUser from './actions/user-actions';

var testStyle = {
  textAlign: 'center'
}

class App extends Component {
  constructor(props) {
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser() {
    this.props.onUpdateUser('Sam');
    console.log('clicked');
  }

  render() {
    console.log(this.props);

    return (
      <div>
      <h1 style={testStyle}>{this.props.user}</h1>
      <input onChange={this.onUpdateUser}/>
      <div onClick={this.onUpdateUser}>Update</div>
      {this.props.user}
      </div>
    );
  }
}

const mapStateToProps = state => ({
products: state.products,
user: state.user
});

const mapActionsToProps = {
onUpdateUser: updateUser
}

export default connect(mapStateToProps, mapActionsToProps)(App);
