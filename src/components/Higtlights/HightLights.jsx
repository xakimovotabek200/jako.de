import React from 'react';
import "./Hightlights.css";
import { data } from './data';



function HightLights() {
    return (
        <div>
            <div className='text_hight'>
                <h1>HightLights</h1>
            </div>
            <div className='box_grid'>

                {data.map((item) => {
                    return (
                        <div key={item.id}>
                            <div div className="box" >
                                <div>
                                    <img src={item.image} alt="" />
                                </div>
                                <hr />
                                <div className='box_text'>
                                    <h4>{item.title}</h4>
                                    <div className="box_flex">
                                        <span className='price'>from €{item.cost1}</span>
                                        <h2 class="text-center">
                                            <del>€{item.costDel2}</del>
                                        </h2>
                                        <p className='text_diskpunt'>-{item.discount}% Diskount</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}


            </div>
        </div>
    )
}

export default HightLights