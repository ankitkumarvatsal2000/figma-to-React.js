import React from 'react'
import "./sidebaritem.css";


const SidebarItem = ({data}) => {
  return (
    <div>
        <ul>
        <li className='icon'>{data.icon}</li>
            <li className='text'>{data.name}</li>
           
        </ul>
     
    </div>
  )
}

export default SidebarItem;