import React from 'react'
import Navbar from './Navbar/Navbar.js'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';




const Header = () => {
    const [responsive, toggleResponsive] = React.useState(false)

    const handleToggleResponsive = () => {
        toggleResponsive(!responsive)
    }

    return(
        

        <div id="header-bar"> 

        <div id="title-ham-div"> 
         <h2 className="title"> {"Bones"}  </h2>

         <button id="hamburger" onClick={handleToggleResponsive}> <MenuIcon /> </button>
        </div>
    
        <Navbar responsive={responsive}/>


     
     
        </div>
    )


}




export default Header