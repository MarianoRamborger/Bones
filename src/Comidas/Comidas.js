import React from 'react'
import './Comidas.css'
import ViSensor from 'react-visibility-sensor'

const Comidas = () => {

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

             <div className="comidas-div" id="nosotros">


                <div className={"menu-div delayed" + (Visible ? " open" : " closed")}>

                { Visible ? 
                
                    <h3 className="menu-title"> </h3>
                
                : null}


                </div>
             

            </div>

        </ViSensor>
       
    )
}

export default Comidas