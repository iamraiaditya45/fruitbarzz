import React from 'react'
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './home'
import TermandCond from './term';
import About from './aboutus'
import Privacy from './privacy'
import Refund from './refund'
import Timeline from './timeline'

function App() {
  return (
    <>
    <Router>
     <Switch>
     <Route  path exact="/">
            <Home />
          </Route>
     {/* <Route path="/" >
         <Home/>
       </Route> */}
       <Route path="/aboutus">
         <About/>
       </Route>
       <Route path="/term" >
         <TermandCond/>
       </Route>
       <Route path="/privacy" >
         <Privacy/>
       </Route>
       <Route path="/refund" >
         <Refund/>
       </Route>
       <Route path="/timeline" >
         <Timeline/>
       </Route>
     </Switch>
     </Router>
    </>
  );
}

export default App;
