import React from "react";
import "./Hightlights.css";
import { productData } from "./data";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { Link,  } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function HightLights() {

    const navigate = useNavigate()
    return (
        <div className='container'>
            <div className='text_hight'>
                <h1>HightLights</h1>
            </div>
            <Carousel
                withIndicators
                height={590}
                slideSize={{ base: '100%', sm: '50%', md: '25.333333%' }}
                slideGap={{ base: 0, sm: 'md' }}
                loop
                controlSize={50}
                align="start"
            >
                {productData.map((item) => {
                    return (
                        <Link key={item.id} to={`/HigtlightsId/${item.id}`} onClick={() => navigate(`/HigtlightsId/${item.id}`)}>
                            <Carousel.Slide >
                                <div className="box" >
                                    <div>
                                        <img src={item.image} alt="" />
                                    </div>
                                    <hr />
                                    <div className='box_text'>
                                        <h4>{item.title}</h4>
                                        <div className="box_flex">
                                            <span className='price'>from €{item.cost1}</span>
                                            <h2 className="text-center">
                                                <del>€{item.costDel2}</del>
                                            </h2>
                                            <p className='text_diskpunt'>-{item.discount}% Diskount</p>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Slide>
                        </Link>
                    )
                })}
            </Carousel >
            <div>
                <button className='btns'>
                    Show All
                </button>
            </div>
        </div >
    )
}

export default HightLights;
