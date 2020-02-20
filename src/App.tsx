import React from 'react';
import './App.css';
import { HomeComponent } from './components/home/HomeComponent';
import { Provider } from 'react-redux';
import { store } from './Store';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LoginComponent from './components/login-component/LoginContainer';
import { ApiComponent } from './components/api-component/ApiComponent';
import DestinationComponent from './components/destinations/DestinationContainer';
import { ViewFlightsRentalsComponent } from './components/view-flights-rentals-component/ViewFlightsRentalsComponent';
import { FlightManagerDashboard } from './components/flight-manager-dashboard-component/FlightManagerDashboardComponent';
import { OpenFlightsComponent } from './components/open-flights-component/OpenFlightsComponent';
import { UserDashboard } from './components/user-dashboard-component/UserDashboardComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/user-dashboard' component={UserDashboard} />
            <Route path='/open-flights' component={OpenFlightsComponent} />
            <Route path='/flights' component={ViewFlightsRentalsComponent} />
            <Route path='/manager-dashboard' component={FlightManagerDashboard} />
            <Route path='/planet' component={DestinationComponent} />
            <Route path='/login' component={LoginComponent} />
            <Route path='/apitest' component={ApiComponent} />
            <Route path='/' component={HomeComponent} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
