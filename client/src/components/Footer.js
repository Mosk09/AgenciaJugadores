import React from 'react'
import s from "../../src/modules/Footer.module.css";

export default function Footer() {
  return (
        <div className={`${s.divFooter}`}>
        <div className='container'>
        <div className={`${s.row}`}>
        <div className="col-md-3">
            <a><img className={` ${s.imgLogo}`}src="/My project-1.png"></img></a>
          </div>
          <div className={`col-md-1 offset-md-2 ${s.divloguitos}`}>
            <a><img className={` ${s.imgLogo1}`}src="/facebook.png"></img></a>
          </div> <div className="col-md-1">
            <a><img className={` ${s.imgLogo1}`}src="/instagram.png"></img></a>
          </div> <div className="col-md-1">
            <a><img className={` ${s.imgLogo1}`}src="/whatsapp (1).png"></img></a>
          </div>
          <div className={`col-md-2 offset-md-2  ${s.links}`}>By Leo Mosconi</div>
        </div>
        </div>
        
    </div>
  )
}
