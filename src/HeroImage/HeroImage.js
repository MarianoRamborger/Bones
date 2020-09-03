import React from 'react'
import './HeroImage.css'

import { isMobile } from 'react-device-detect'


import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import CallIcon from '@material-ui/icons/Call';

  
const HeroImage = () => {

    const smoothScroll = (event) => {
       
        document.querySelector(`#${event.target.name}`).scrollIntoView({ behavior: 'smooth' || true })

        // TODO: Safari solo soporta behavior: true. Implementar detección y targeteo directo

    }

    const smoothScrollSvg = () => {
        document.querySelector(`#contacto`).scrollIntoView({ behavior: 'smooth' || true })
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

                            <p className="hero-subtext outline"> Cocina Artesanal </p>
                    
                    </div>

                    <div className="hero-image-menu">

                    <button onClick={smoothScroll} name="nosotros" className="outline">  Nosotros   </button>
                    <button onClick={smoothScroll} name="comidas" className="outline">  Comidas   </button>
                    <button onClick={smoothScroll} name="contacto" className="outline">  Contacto   </button>

                    
                



                    </div>

                    <div className="hero-image-social">

               
               
                    <div className="social-icons-div">
                        {
                            isMobile ? 
                            
                            <a className="call-icon-link" href="tel:+541136788685"> <CallIcon  className="outline"/> </a> 
                            :
                            <CallIcon onClick={smoothScrollSvg}  name="contacto" className="outline"/>
                        }
                        

                        <a href="https://web.whatsapp.com/send?phone=+541136788685" target="blank"  >
                            <WhatsAppIcon className="outline" />
                        </a>
                    </div>
                    

                    </div>

                </div>

          



        </div>
    )
}

export default HeroImage