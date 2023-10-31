import React from 'react'
import './card_detail.css';
const Card_Detail = () => {
  return (
    <div className='card'>
        <div className='card-head'>
            <img src='./smallImg.png'></img>
            <div >
                <h3>Lara Leones</h3>
                <p>@thewallart</p>
            </div>
        </div>
        <div className='para-content'>
            <p className='para'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.<span> Read More</span></p>
        </div>
        <div>
            <img className='img' src='./FullImage.png'></img>
        </div>
        <div className='footer-sec'>
            <div className='sec-1'>
            <img src='./heart.svg'></img>
            <p>9.8k</p>
            </div>
            <div className='sec-1'>
            <img src='./comment.svg'></img>
            <p>8.6k</p>
            </div>
            <div className='sec-1' >
            <img src='./share.svg'></img>
            <p>7.4k</p>
            </div>
        </div>
    </div>
  )
}

export default Card_Detail;