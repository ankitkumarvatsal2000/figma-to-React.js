import React from 'react'
import {categories} from "../utils/Constants"
import SidebarItem from './SidebarItem'
import "./sidebar.css";
import {RiLogoutCircleLine} from "react-icons/ri";

const Sidebar = () => {
  return (
    <>
    <div className='main'>
        {categories.map((item)=>{
            return(
                <>
                <SidebarItem
                 key={item.id}
                 data={item}

                 />
                </>
            )
        })}
        <div className='logout'>
        <RiLogoutCircleLine /> 
          <p> Logout</p>
          </div>
    </div>
    <div className='copyright'>
    <p>2022©logo name</p>
    <p>Developed by ivan Infotech</p>
    </div>
    </>
  )
}

export default Sidebar;