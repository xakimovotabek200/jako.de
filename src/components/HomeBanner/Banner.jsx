import React from 'react'
import { Link } from "react-router-dom"
import "./Banner.css"

function Banner() {
    return (
        <div className="container">
            <div className='banner-image'>
                <div className='text'>
                    <h3 >30% OFF SELECTED AUTUMN ARTICLES <br /></h3>
                    <h3>READY FOR COLD DAYS</h3>
                    <button className='btn'>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Banner;