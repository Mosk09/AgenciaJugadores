import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import s from "../../src/modules/NavBar.module.css";
import Modal from '../components/Modal'


export default function NavBar({ modal,setModal }) {
  
  const navigate = useNavigate()
  const irAJugadores =()=>{
    navigate("/jugadores")
  }
  const irAHome =()=>{
    navigate("/")
  }
  const handleLogout =()=>{
    localStorage.clear()
    navigate("/")
  }
  const token = localStorage.getItem("token")

  useEffect(()=>{
    
  },[token])
  return (
    <div className={`container-fluid ${s.divContainer}`}>
   <Modal modal={modal} setModal={setModal}>    
    </Modal>   
      <div className={`container text-center ${s.container1}`}>
        <div className={s.row}>
          <div className="col-md-2">          
              <img className={` ${s.imgLogo}`} alt="foto" onClick={irAHome} src="/My project-1.png"></img>         
          </div>
          <div className={`col-md-1 offset-md-6 ${s.links}`}>
            <a className={s.a} href="#contacto">
              <i className="bi bi-envelope-fill"> </i>
              <p>Contactanos</p>
            </a>
          </div>
          <div onClick={irAJugadores} className={`col-md-1  ${s.links}`}>           
            <i className="bi bi-person-fill"> </i>           
            <p>Jugadores</p>
          </div>
          <div className={`col-md-1  ${s.links}`}>        
            <i className="bi bi-heart-fill"> </i>        
            <p>Favoritos</p>
          </div>
           {
             !token?
          <div className={`col-md-1  ${s.links}`}onClick={()=>setModal(!modal)}>            
            <i className="bi bi-door-open-fill"> </i>       
           <p>SingIn/SingUp</p>
          </div>: <div className={`col-md-1  ${s.links}`} onClick={handleLogout}>            
            <i className="bi bi-door-closed-fill"> </i>       
           <p>Log Out</p>
          </div>
          }            
        </div>
      </div>
    </div>
  );
}
