import React from 'react';
import { connect } from 'react-redux';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        Nome: {props.name}
      </header>
    </div>
  );
}
const mapStateToProps = (state) => {
  return{
    name:state.user.name
  }
}
export default connect(mapStateToProps)(App);
