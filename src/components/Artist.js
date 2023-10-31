import React from 'react'
import './artist.css';

const Artist = () => {
    return (
       <>
            <div className='artist-head'>
                <p className='first-p'>Artists</p>
                <p>Photographers</p>
            </div>
            <div className='artist-main'>

                <div className='relative'>
                    <img src='./img-1.png'></img>

                </div>
                <div className='absolute-class'>
                    <img src='inside-img.png'></img>
                    <div>
                        <p className='first-para'>Thomas Edward</p>
                        <p className='second-para'>@thewildwithyou</p>
                    </div>
                </div>
                {/* for second image -------------------------------------------------------------------------------------------------------- */}
                <div className='relative-1'>
                    <img src='./img-2.png'></img>

                </div>
                <div className='absolute-class-1'>
                    <img src='inside-img-2.png'></img>
                    <div>
                        <p className='first-para-1'>Thomas Edward</p>
                        <p className='second-para-1'>@thewildwithyou</p>
                    </div>
                </div>
                {/* for third image-------------------------------------------------------------------------------------------------- */}
                <div className='relative-2'>
                    <img src='./img-4.png'></img>

                </div>
                <div className='absolute-class-2'>
                    <img src='inside-img-2.png'></img>
                    <div>
                        <p className='first-para-2'>Thomas Edward</p>
                        <p className='second-para-2'>@thewildwithyou</p>
                    </div>
                </div>

                {/* for fourth image------------------------------------------------------------------------------------- */}
               < div className='relative-3'>
                    <img src='./img-1.png'></img>

                </div>
                <div className='absolute-class-3'>
                    <img src='inside-img-2.png'></img>
                    <div>
                        <p className='first-para-3'>Thomas Edward</p>
                        <p className='second-para-3'>@thewildwithyou</p>
                    </div>
                </div>


                {/* for 5th image------------------------------------ */}
                <div className='relative-4'>
                    <img src='./img-2.png'></img>

                </div>
                <div className='absolute-class-4'>
                    <img src='inside-img-2.png'></img>
                    <div>
                        <p className='first-para-4'>Thomas Edward</p>
                        <p className='second-para-4'>@thewildwithyou</p>
                    </div>
                </div>

                {/* for 6th image----------------------------------------------------------------- */}
                <div className='relative-5'>
                    <img src='./img-4.png'></img>

                </div>
                <div className='absolute-class-5'>
                    
                    <div>
                        <p className='first-para-5'>Thomas Edward</p>
                        <p className='second-para-5'>@thewildwithyou</p>
                    </div>
                </div>
            </div>
            </>
            )
}

            export default Artist;