import React from 'react';

import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
  //Link
} from "react-router-dom";



const App = () => {
  return(

    <Router>

     <div className="app-wrapper"> 
        <Header />
  
      <div className="content-wrapper">

            <Switch>

            <Route exact path="/">

            <div> TEST </div>

              
            </Route>

            </Switch>

        </div>
      </div>
      
      <Footer />
    </Router>
    )
}

export default App;
