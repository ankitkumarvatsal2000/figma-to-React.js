import React from 'react'
import './footeritem.css';


const FooterItem = ({img,text,price,ratings}) => {
  return (
    <div className='full-footer' >
      <div className='all-footer'>
        <img  src={img}></img>
      </div>
      <div>
        <p className='footer-para-1'>{text}</p>
        <div className='all-para-footer'>
       <p>${price}</p>
       <p className='footer-para-2'>{ratings}</p>
       </div>
      </div>
    </div>
  )
}

export default FooterItem;