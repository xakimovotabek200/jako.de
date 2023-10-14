import React from 'react'
import './Equitment.css'
import kids2 from '../Kids/kids2.jpg'
import kids from '../Kids/kids.jpg'

const Equitment = () => {
  return (
    <div>
      <div className='kids'>
        <div className="kids_title">
          <h1 className='h1_kids_title'>SPORTSWEAR KIDS</h1>
        </div>
        <div className="three_div_img">
          <div className="img_div">
            <img className='imgs_kis1_2' src={kids} alt="" />
            <h1 className='kids_sport2'>Bags</h1>
          </div>
          <div className="img_div">
            <img className='imgs_kis1_2' src={kids2} alt="" />
            <h1 className='kids_sport3'>Balls</h1>
          </div>
        </div>
        <div className="three_div_imgas">
          <div className="img_div">
            <img className='imgs_kis1_2' src={kids} alt="" />
            <h1 className='kids_sport5'>Shin guards</h1>
          </div>
          <div className="img_div">
            <img className='imgs_kis1_2' src={kids2} alt="" />
            <h1 className='kids_sport6'>Goalkeeper gloves</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Equitment