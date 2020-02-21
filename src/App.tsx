import React from 'react';
import './App.css';
import { HomeComponent } from './components/home/HomeComponent';
import { Provider } from 'react-redux';
import { store } from './Store';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import  LoginComponent  from './components/login-component/LoginContainer';
import { ApiComponent } from './components/api-component/ApiComponent';
import DestinationComponent from './components/destinations/DestinationContainer';
import { AboutComponent } from './components/about-us-component/AboutComponent';
import {Register} from './components/register/Register'
import Navbar from './utils/navbar/Navbar';
import { DashboardComponent } from './components/dashboard-component/regular-user/DashboardComponent';

import { RegisterCompanyComponent } from './components/register-company-component/RegisterCompanyComponent';
import { CreateAircraftComponent } from './components/create-aircraft-component/CreateAircraftComponent';
import { CreateFlightComponent } from './components/create-flight-component/CreateFlightComponent';
import { ViewAllFlights } from './components/view-all-flights-component/ViewAllFlightsComponent';

const App: React.FC = () => {
  return (
    
    <div>
      <Provider store={store}>
        
        <Router>
        <Navbar/>
          <Switch>
            <Route path='/viewflights' component = {ViewAllFlights}/>
            <Route path='/flight' component = { CreateFlightComponent}/>
            <Route path='/ship' component = {CreateAircraftComponent} />
            <Route path = '/planet' component = {DestinationComponent}/>
            <Route path='/login' component = { LoginComponent } />
            <Route path = '/dashboard' component = {DashboardComponent}/>
            <Route path='/about' component = { AboutComponent}/>
            <Route path='/registerCompany' component = { RegisterCompanyComponent}/>
            <Route path='/apitest' component = { ApiComponent } />
            <Route path = '/register' component = {Register}/>
            <Route path = '/' component = {HomeComponent}/>
            
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;