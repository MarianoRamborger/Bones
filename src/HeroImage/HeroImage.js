import React from 'react'
import './HeroImage.css'

import { isMobile } from 'react-device-detect'

import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import CallIcon from '@material-ui/icons/Call';

  
const HeroImage = () => {

    const smoothScroll = (event) => {
       
        document.querySelector(`#${event.target.name}`).scrollIntoView({ behavior: 'smooth' || true })

        // TODO: Safari solo soporta behavior: true. Implementar detección y targeteo directo

    }



    return (
        <div className="hero-image-div">


            {
                isMobile ? 
                <div className="video-div">
                    <video autoPlay loop muted id="pizzaVideo"> 
                        <source src={require("./Video/PizzaMobile.mp4")} type="video/mp4" />

                    </video>

                </div>

                :
                <div className="video-div">
                    <video autoPlay loop muted id="pizzaVideo"> 
                        <source src={require("./Video/Pizza.mp4")} type="video/mp4" />

                    </video>

                </div>

            }

          

                <div className="overlay-div">

                    <div className="hero-image-text">

        
                            <h1 className="hero-title outline"> Lo de Vilma </h1>

                            <p className="hero-subtext outline"> SUBTEXT </p>
                    
                    </div>

                    <div className="hero-image-menu">

                    <button onClick={smoothScroll} name="nosotros" className="outline">  Nosotros   </button>
                    <button onClick={smoothScroll} name="comidas" className="outline">  Comidas   </button>
                    <button onClick={smoothScroll} name="contacto" className="outline">  Contacto   </button>

                    
                



                    </div>

                    <div className="hero-image-social">

               
                    <FacebookIcon className="outline" />

                    <CallIcon  className="outline"/>

                    <WhatsAppIcon className="outline" />
                   
                    

                    </div>

                </div>

          



        </div>
    )
}

export default HeroImage