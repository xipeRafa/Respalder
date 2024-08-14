
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";



export default function Navbar() {

  const [isActive, setIsActive]=useState(true)

  const windowWidth = window.innerWidth;

  const InWidth = () => {
    if(windowWidth<999){
      setIsActive(true)
    }
  }

// navBar-hamburger-menu
// navBar2-hamburger-menu  
// navBar3-hamburger-menu3  


  return (
<div className="navBar3">

    <div onClick={()=>setIsActive(!isActive)}  className="hamburger" >

      <div className="menu-bar">
        <div className="uno" />
        <div className="dos" />
        <div className="tres"/>
      </div>

      <p className='menuIcons'>{isActive ? <b className='menuIcon'>MENU</b> : <b className='menuIconX'>✘</b>}</p>

    </div>

    <div className={isActive ? "menu3 " : "menu3 display"} onClick={InWidth}>
    
        <NavLink to="/"> Bautismos</NavLink>
        
        <NavLink to="/comuniones"  > Comuniones</NavLink>
        <NavLink to="/confirmaciones"> Confirmaciones </NavLink>
        

        <NavLink to="/matrimonios"> Matrimonios</NavLink>
        <NavLink to="/defunciones"   > Defunciones</NavLink>

        <NavLink to="/parroquia"   > parroquia</NavLink>
        <NavLink to="/usuarios">Usuarios</NavLink>
     
    </div>  

</div>
  );
}





/*  */