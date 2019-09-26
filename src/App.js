import React, { Component } from 'react';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUser, apiRequest } from './actions/user-actions';

var testStyle = {
  textAlign: 'center'
}

class App extends Component {
  constructor(props) {
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.onApiRequest();

    }, 1500);
  }

  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value);
  }

  render() {
    console.log(this.props);

    return (
      <div style={testStyle}>
      <h1>{this.props.user}</h1>
      <input onChange={this.onUpdateUser}/>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log(props);

  return {
  products: state.products,
  user: state.user,
  userPlusProp: `${state.user} ${props.aRandomProps}`
 }
};

const mapActionsToProps = {
  onUpdateUser: updateUser,
  onApiRequest: apiRequest
};

export default connect(mapStateToProps, mapActionsToProps)(App);
