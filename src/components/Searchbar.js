import React from 'react'
import './searchbar.css';

const Searchbar = () => {
  return (
    <div>
         <img className=' search-icon' src='./search.svg'></img>
        <input className='inp' disabled="true" placeholder='search here'></input>
        <img className='filter-icon' src='./filter.svg'></img>
        <p className='filter'>Filter</p>
       
    </div>
  )
}

export default Searchbar;