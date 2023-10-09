import React from 'react'
import "./Hightlights.css"
import { data } from './data'

function HightLights() {
    return (
        <div>
            <div className='text_hight'>
                <h1>HightLights</h1>
            </div>
            <div>
                <div className="box">
                    <div>
                        <img src="https://cdn.jako.de/userdata/dcshop/images/thumb_4/9250_08.jpg" alt="" />
                    </div>
                    <hr />
                    <div className='box_text'>
                        <h4>JAKO Presentation trousers Competition 2.0 </h4>
                        <div className="box_flex">
                            <span className='price'>from €27.99</span>
                            <h2 class="text-center">
                                <del>€27.99</del>
                            </h2>
                            <p>-30% Diskount</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HightLights