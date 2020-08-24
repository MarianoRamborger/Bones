import React from 'react'
import '../Header.css'
import { Link } from 'react-router-dom'




const Navbar = (props) => {
    const {responsive} = props

    const [dropDown, toggleDropdown] = React.useState(false)
  


    //Merge in one
    const handletoggleDropdown = (event) => {
        if (event.type === 'mouseenter') {
            toggleDropdown(true)
        }
        if (event.type === 'mouseleave') {
            toggleDropdown(false)
        }
    }

    const handletoggleDropdownSmall = () => {
        toggleDropdown(!dropDown)
    }
  
    //Merge in one

    return (
     
        <div className="nav-bar" >   
         

            <ul className={"nav-list"  + (responsive ? ' responsive' : '')}>   {/* Dynamic class allocation!*/}
    
                <li>  <Link to="/" > Home </Link> </li>
            
              
                {/* EL dropdown for big screens. */}
                <li className="dropdown-container big-dropdown" onMouseEnter={handletoggleDropdown} onMouseLeave={handletoggleDropdown}  > 
                  
                        <Link to="/Mainl" > DropdownMainLink 
            
                           
                        </Link>
                  
                    
                            {
                                dropDown === true ?  
                                <div className="dropdown-content fade-in" >
                                <div>
                                    <Link to="/#"Link> Link </Link>
                                    <Link to="/#"> Link </Link>
                                    <Link to="/#"> Link </Link>
                                    <Link to="/#"> Link </Link>
                                    <Link to="/#"> Link </Link>
                                </div> 
                                <div>
                                    <Link to="/#"> Linko </Link>
                                    <Link to="/#">Link </Link>
                                    <Link to="/#"> Link </Link>
                                    <Link to="/#"> Linko </Link>
                                    <Link to="/#"> Links </Link>
                                </div>
                               
                                </div>
                                
                                : null
                            }
                            
                    </li>

                {/* EL dropdown for small screens. */}

                <li className={"dropdown-container small-dropdown" + (dropDown ? ' open': '')} onClick={handletoggleDropdownSmall}>                
                <Link to="#" className="dropdown-container-small-button" > DropDownMainLink </Link> 

                {dropDown ?  
                    <div className="dropdown-content-small">
                                <div className="dropdown-content-small-column"> 
                                    <Link to="/#"> Link </Link>
                                    <Link to="/#"> Link </Link>
                                    <Link to="/#"> Link </Link>
                                    <Link to="/#"> Link </Link>
                                    <Link to="/#"> Link </Link>
                                    <Link to="/#"> Link </Link>
                                </div>
                                <div className="dropdown-content-small-column">
                                    <Link to="/#"> LinkLink</Link>
                                    <Link to="/#"> Link </Link>
                                    <Link to="/#"> Link </Link>
                                    <Link to="/#"> Linko </Link>
                                    <Link to="/#"> Link </Link>
                                </div>
                    </div>
                    : 
                    <div className="dropdown-content-small fade-out">
                                <Link to="/#"> Link </Link>
                                <Link to="/#"> Link </Link>
                                <Link to="/#"> Link </Link>
                                <Link to="/#"> Link </Link>
                                <Link to="/#"> Link </Link>
                                <Link to="/#"> Link </Link>
                                <Link to="/#"> Link </Link>
                                <Link to="/#">Link </Link>
                                <Link to="/#"> Link </Link>
                                <Link to="/#"> Link </Link>
                                <Link to="/#"> Link </Link>
                    </div>

                }

                </li>


            <li><Link to="/contacto"> Contacto </Link> </li>


        
            </ul>

     
        

        </div>
        
    )

}

export default Navbar
