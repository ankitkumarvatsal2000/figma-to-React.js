import React from "react";
import { AiOutlineHome,AiOutlineHeart,AiOutlineMail } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import {BsWallet} from "react-icons/bs";
import {MdOutlineSubscriptions} from "react-icons/md";
import {CgProfile} from "react-icons/cg";
import {CiSettings} from "react-icons/ci";

export const categories = [
    { name: "home",  icon:<AiOutlineHome /> },
    
    { name: "notification",icon:<IoMdNotificationsOutline /> },
    { name: "shop", icon: <AiOutlineHeart /> },
    { name: "conversation", icon:<AiOutlineMail /> },
    { name: "wallet", icon: <BsWallet />},
    { name: "subscription", icon: <MdOutlineSubscriptions /> },
    { name: "My profile", icon: <CgProfile /> },
    { name: "setting", icon: <CiSettings />}
]