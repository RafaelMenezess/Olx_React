import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/partials/Header'


import Home from './pages/Home';
import Sobre from './pages/Sobre';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        < Header user={props.user} /> 

        <Route exact path="/" component={Home} />
        <Route exact path="/sobre" component={Sobre} />


      </div>    
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => {
  return{
    user:state.user
  }
}
export default connect(mapStateToProps)(App);
