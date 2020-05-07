import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import "./App.css"

import NavBar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Contact from "./components/Contact.js";
import Events from "./components/Events.js";
import Home from "./components/Home.js";
import Menu from "./components/Menu.js";
import Merch from "./components/Merch.js"

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>

      <Switch>
        <Route path="/menu">
          <Menu/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/events">
          <Events/>
        </Route>
        <Route path="/merch">
          <Merch/>
        </Route>
        <Route path="/">
          <Home/>
          
        </Route>

      </Switch>

      <Footer/>
    </div>
    </Router>
  );
}

export default App;
