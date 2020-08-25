import React from 'react'
import './HeroImage.css'


import {
    Link as ScrollLink,
    animateScroll 
  } from 'react-scroll'
  

const HeroImage = () => {
    return (
        <div className="hero-image-div">

            <div className="hero-image-text">
                        
                    <h1 className="hero-title outline"> ROTISERIA "XXXXXXX" </h1>

                    <p className="hero-subtext outline"> SUBTEXT </p>
            
            </div>

            <div className="hero-image-menu">

            <ScrollLink activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to="comidas"> Comidas </ScrollLink>

            <ScrollLink activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to="contacto"> Contacto </ScrollLink>

            <ScrollLink> Boton C </ScrollLink>



            </div>

            <div className="hero-image-social">


            </div>



        </div>
    )
}

export default HeroImage