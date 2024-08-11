
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
    
        <NavLink style={{backgroundColor:'transparent'}} to="/adminPolanco"             > Bautismos      </NavLink>
        <NavLink to="/adminPolanco/inventario"   > Confirmaciones </NavLink>
        <NavLink to="/adminPolanco/ordersHillo"  > Comuniones</NavLink>

        <NavLink to="/adminPolanco/ordersSanCarlos"> Matrimonios</NavLink>
        <NavLink to="/adminPolanco/productosBajos"   > Defunciones</NavLink>

        <NavLink to="/adminPolanco/productosBajosSanCarlos"   > parroquia</NavLink>
        <NavLink to="/adminPolanco/entregas">Usuarios</NavLink>
     
    </div>  

</div>
  );
}





/*  */