import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Sobre from './pages/Sobre';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          Nome: {props.name}
        </header>

        <Route exact path="/" component={Home} />
        <Route exact path="/sobre" component={Sobre} />


      </div>    
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => {
  return{
    name:state.user.name
  }
}
export default connect(mapStateToProps)(App);
