import React from 'react'
import './Contacto.css'
import ViSensor from 'react-visibility-sensor'

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

             <div className={"contacto-div" + (Visible ?  " visible" :  "") } id="nosotros">

                {
                    Visible ? <h2> FFFFFFFFFFFF </h2> : null
                }

            </div>

        </ViSensor>
       
    )
}
export default Contacto