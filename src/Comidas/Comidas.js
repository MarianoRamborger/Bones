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

             <div className="comidas-div" id="comidas">


                <div className={"menu-div delayed" + (Visible ? " open" : " closed")}>

                { Visible ? 
                    
                    <div>
                    <h3 className="menu-title"> Menú </h3>

                    <p className="comida-item"> Pizzas </p>
                    <p className="comida-list">  Muzarella, jamón y morrones, napolitana, palmitos, aceitunas, huevo, espinaca.  </p>

                    <p className="comida-item"> Empanadas </p>

                    <p className="comida-list"> Carne, pollo, capresse, verdura, queso, choclo, humita, jamón y queso. </p>

                    <p className="comida-item"> Milanesas </p>
                    
                    <p className="comida-item"> Matambre de Pollo </p>
                    <p className="comida-item"> Matambre de Carne </p>
                    <p className="comida-item"> Papas fritas </p>
                    <p className="comida-item"> Pollo </p>

                    </div>
                
                : null}


                </div>
             

            </div>

        </ViSensor>
       
    )
}

export default Comidas