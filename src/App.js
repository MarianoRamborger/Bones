import React from 'react';

import Footer from './Footer/Footer.js'

import HeroImage from './HeroImage/HeroImage.js'
import Comidas from './Comidas/Comidas.js'
import Contacto from './Contacto/Contacto.js'

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

      <Route>

          <HeroImage />

          <Comidas id="comidas" title="contacto" />

          <Contacto id="contacto" title="contacto" />


          

      
      </Route>
              
        

      
      <Footer />
    </Router>
    )
}

export default App;