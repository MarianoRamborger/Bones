import React, {Fragment} from 'react'
import './Contacto.css'
import ViSensor from 'react-visibility-sensor'
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';

import { isMobile } from 'react-device-detect'
import WapIcon from './Images/WapIcon.png'




const Contacto = () => {

    const VisionListener = (isVisible) => {
        if (isVisible) {
            ChangeVisibility(true)
        }
        if (!isVisible) {
            ChangeVisibility(false)
        }
    }
    

    const [Visible, ChangeVisibility] = React.useState(false)

    return (
        <ViSensor onChange={VisionListener}  partialVisibility={true} minTopValue={100} offset={{top: 30}}  >

             <div className={"contacto-div" + (Visible ?  " visible" :  "") } id="contacto">

                {
                    Visible ? 

                    <Fragment>

               
                        
                        <p className="contacto-p"> Hacé tu pedido llamando al... </p>
                        


                        {
                            isMobile  ?
                            <a className="phone-icon-div" href="tel:+541136788685">
                                <PhoneInTalkIcon />
                                <p> 11 3678 8685</p>
                            </a>
                            :
                            <div className="phone-icon-div">
                                <PhoneInTalkIcon />
                                <p> 11 3678 8685</p>
                            </div>

                        }
                      




                        <p className="contacto-p" > También podés escribirnos por WhatsApp! </p>


                        {
                            isMobile ?
                            <a href="https://wa.me/+541136788685" target="blank" className="wap-link" >  
                            <img src={WapIcon} alt="Logo de WhatsApp"/> 
                            </a>
                            :
                            <a href="https://web.whatsapp.com/send?phone=+541136788685" target="blank" className="wap-link" >  
                                <img src={WapIcon} alt="Logo de WhatsApp"/> 
                            </a>
                        }
                      

                        <p className="contacto-p"> Consultá por nuestro menú del día y especiales de fin de semana! </p>
                        
                   

                    </Fragment>
                    
                    : null
                }

            </div>

        </ViSensor>
       
    )
}
export default Contacto