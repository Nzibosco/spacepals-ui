import React from 'react';
import './App.css';
import { HomeComponent } from './components/home/HomeComponent';
import { Provider } from 'react-redux';
import { store } from './Store';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import  LoginComponent  from './components/login-component/LoginContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/login' component = { LoginComponent } />
            <Route path = '/' component = {HomeComponent}/>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
