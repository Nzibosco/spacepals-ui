import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomeComponent } from './components/home/HomeComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Registration } from './components/registration-component/RegistrationComponent';
import { Provider } from 'react-redux';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' component={HomeComponent} />
          <Route path='/register' component= {Registration} />
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
