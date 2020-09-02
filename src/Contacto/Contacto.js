import React from 'react'
import './Contacto.css'
import ViSensor from 'react-visibility-sensor'
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

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

                    <div>

               

                        

                        <div className="phone-icon-div">
                            <PhoneInTalkIcon />
                            <p> XXXXXX-XXXXXXX</p>
                        </div>

                        <div className="email-icon-div">
                            <MailOutlineIcon />
                            <p> email@emailprovider.com </p>
                        </div>

                   

                    </div>
                    
                    : null
                }

            </div>

        </ViSensor>
       
    )
}
export default Contacto