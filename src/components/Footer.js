import React from 'react'
import footerData from '../footer.json'
import FooterItem from './FooterItem'
import './footer.css';

const Footer = () => {
  return (
    <div className='ra'>
    {footerData.map((item)=>{
  return(
    <>
    <div className='footer'>
    <FooterItem
    key={item.id} 
    img={item.img}
    text={item.para}
    price={item.price} 
    ratings={item.raitings} />
    </div>
    </>
  )
})}
     </div>
  )
}

export default Footer;