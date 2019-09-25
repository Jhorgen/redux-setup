import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

var testStyle = {
  textAlign: 'center'
}

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
      <h1 style={testStyle}>HELLO WORLD</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
products: state.products,
user: state.user
});

const mapActionsToProps = {

}

export default connect(mapStateToProps, mapActionsToProps)(App);
