/* eslint-disable no-unused-vars */
import React from "react";
import "./stylesheets/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Dashboard, Home, Login, Parcels, Reset, Signup, Trips , GettingStarted , GettingStartedParcel , PackageOverview , PackageDetails , FlightDeparture , ItemCapacity , FlightArrival , AirlineInformation , CarryingCapacity , Message } from "./pages";
import * as ROUTES from "./constants/routes";
import { Profile } from "./pages/Profile";
export const App = () => {
  return (
    <Router>
    <Switch>
      <Route path={ROUTES.LOGIN} exact>
        <Login />
      </Route>
      <Route path={ROUTES.SIGN_UP} exact>
        <Signup />
      </Route>
      <Route path={ROUTES.RESET} exact>
        <Reset />
      </Route>
      <Route path={ROUTES.PROFILE} exact >
        <Profile />
      </Route>
      <Route path={ROUTES.TRIPS} exact >
        <Trips />
      </Route>
      <Route path={ROUTES.PARCELS} exact >
        <Parcels />
      </Route>

      <Route path={ROUTES.GETTINGSTARTEDPARCEL} exact >
        <GettingStartedParcel />
      </Route>

      <Route path={ROUTES.GETTINGSTARTED} exact >
        <GettingStarted />
      </Route>

      <Route path={ROUTES.PACKAGEOVERVIEW} exact >
        <PackageOverview />
      </Route>

      
      <Route path={ROUTES.PACKAGEDETAILS} exact >
        <PackageDetails />
      </Route>

      <Route path={ROUTES.ITEMCAPACITY} exact >
        <ItemCapacity />
      </Route>

      <Route path={ROUTES.FLIGHTDEPARTURE} exact >
        <FlightDeparture />
      </Route>

      <Route path={ROUTES.FLIGHTARRIVAL} exact >
        <FlightArrival />
      </Route>

      <Route path={ROUTES.AIRLINEINFORMATION} >
        <AirlineInformation />
      </Route>

      <Route path={ROUTES.CARRYINGCAPACITY} >
        <CarryingCapacity />
      </Route>

      <Route path={ROUTES.MESSAGE} >
        <Message />
      </Route>
     
      <Route path={ROUTES.DASHBOARD} >
        <Dashboard />
      </Route>
     
      

      
     
    </Switch>
</Router>
  );
};
