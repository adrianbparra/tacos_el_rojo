import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import NavBar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Merch from "./components/Merch"

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