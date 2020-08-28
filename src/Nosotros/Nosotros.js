import React from 'react'
import './Nosotros.css'

import ViSensor from 'react-visibility-sensor'

import p1 from './Images/Nosotros1.jpg'
import p2 from './Images/Nosotros2.jpg'
import p3 from './Images/Nosotros3.jpg'
import p4 from './Images/Nosotros4.jpg'
import p5 from './Images/Nosotros5.jpg'
import p6 from './Images/Nosotros6.jpg'
import p7 from './Images/Nosotros7.jpg'
import p8 from './Images/Nosotros8.jpg'



const Nosotros = () => {

    const VisionListener = (isVisible) => {
        if (isVisible) {
            ChangeVisibility(true)
            console.log("IM VISIBLE")
        }
        else {
            ChangeVisibility(false)
            console.log("IM NOT VISIBLE")
        }
    }
    

    const [Visible, ChangeVisibility] = React.useState(false)

    return (
        <ViSensor onChange={VisionListener} partialVisibility={true} minTopValue={100} offset={{top: 30}}   >

                {
                    Visible ? 
                    <div className={"nosotros-div"} id="nosotros">


                        <div className="institucional-div fade-in-last" >

                            ROTISERIA 

                   

                        </div>
                    
                        <div className="nosotros-img-div">

                            {/* Primera row  */}
                        
                            <div className="square fade-in-0"> <img src={p1} alt="Comida" /> </div>
                            <div className="square fade-in-2">  <p> Rico </p>  </div>
                            <div className="square fade-in-1"> <img src={p2} alt="Comida" /> </div>
                            <div className="square fade-in-3">  <p> Tentador </p>  </div>
                
                            </div>
                   
                            {/* Segunda row  */}

                            <div className="nosotros-img-div">

                                <div className="square fade-in-3">  <p> Natural </p>  </div>
                                <div className="square fade-in-1"> <img src={p3} alt="Comida" /> </div>
                                <div className="square fade-in-2">  <p> Casero </p>  </div>
                                <div className="square fade-in-0"> <img src={p4} alt="Comida" /> </div>

                            </div>

                            {/* Tercera row  */}

                            <div className="nosotros-img-div">

                                <div className="square fade-in-2"> <img src={p5} alt="Comida"/> </div>
                                <div className="square fade-in-0">  <p> Rapido </p>   </div>
                                <div className="square fade-in-1"> <img src={p6} alt="Comida"/> </div>
                                <div className="square fade-in-3">  <p> Inigualable </p>  </div>

                            </div>
                            

                            {/* Primera row  */}

                            <div className="nosotros-img-div">

                                <div className="square fade-in-1">  <p> Sabroso </p>  </div>
                                <div className="square fade-in-3"> <img src={p7} alt="Comida"/> </div>
                                <div className="square fade-in-2">  <p> Saludable </p>  </div>
                                <div className="square fade-in-1"> <img src={p8} alt="Comida"/> </div>

                            </div>
                           

                    
                        
                    
                        <div className="nosotros-text-div fade-in"> 
                        
                          
                              

                        </div>

                    

                 
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    </div>

                     :   <div className={"nosotros-div"} id="nosotros"> </div>
                }



        </ViSensor>
       
    )
}

export default Nosotros