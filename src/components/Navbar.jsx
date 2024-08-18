
import { NavLink } from "react-router-dom";
import "../css/navbar.css";
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

{  localStorage.getItem('userEmailLS') !== null &&<>

    <div onClick={()=>setIsActive(!isActive)}  className="hamburger" >

      <div className="menu-bar">
        <div className="uno" />
        <div className="dos" />
        <div className="tres"/>
      </div>

      <p className='menuIcons'>{isActive ? <b className='menuIcon'>MENU</b> : <b className='menuIconX'>✘</b>}</p>

    </div>

    <div className={isActive ? "menu3 " : "menu3 display"} onClick={InWidth}>
    
        <NavLink to="/Respalder">Mi Parroquia</NavLink>

        <NavLink to="/Respalder/bautismos">Bautismos</NavLink>
        <NavLink to="/Respalder/comuniones"> Comuniones</NavLink>
        <NavLink to="/Respalder/confirmaciones"> Confirmaciones </NavLink>

        <NavLink to="/Respalder/matrimonios"> Matrimonios</NavLink>
        <NavLink to="/Respalder/defunciones"> Defunciones</NavLink>
        {/*<a href='#' className='red'> {localStorage.getItem('userEmailLS').split('g')[0]}</a>*/}
        <a href='#' className='red'>{new Date().toLocaleString().slice(0,9)}</a>
     
    </div>   </>}

</div> 
  );
}




