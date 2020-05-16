import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import NavBar from "./components/Navbar.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Contact from "./components/Contact.js";
import Events from "./components/Events.js";
import Home from "./components/Home.js";
import Menu from "./components/Menu.js";
import Merch from "./components/Merch.js"

function App() {
  return (
    <Router>
      {/* container mx-auto px-10 max-w-screen-lg bg-orange-300 */}
    <div className="container mx-auto bg-primary font-nono min-w-min">
      <NavBar/>
      <Header/>

      <div className="container mx-auto">

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
      </div>

      <Footer/>
    </div>
    </Router>
  );
}

export default App;