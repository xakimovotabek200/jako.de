import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { HoverCard, Text } from '@mantine/core';
import React from "react";
import { Link, } from "react-router-dom";
import "./Hightlights.css";

import { productData } from "./data";

function HightLights() {
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
                align="center"
            >
                {productData.map((item) => {
                    return (
                        <Link key={item.id} to={`/HigtlightsId/${item.id}`} >
                            <Carousel.Slide >
                                <HoverCard shadow="md" closeDelay={300}>
                                    <div className="box" >
                                        <HoverCard.Target>
                                            <img src={item.image} alt="" />
                                        </HoverCard.Target>
                                        <hr />
                                        <div className='box_text'>
                                            <h4>Jako{item.name}</h4>
                                            <div className="box_flex">
                                                <span className='price'>from €{item.cost1}</span>
                                                <h2 className="text-center">
                                                    <del>€{item.costDel2}</del>
                                                </h2>
                                                <HoverCard.Dropdown>
                                                    <Text size="sm">{item.brand}</Text>
                                                </HoverCard.Dropdown>
                                                <p className='text_diskpunt'>-{item.discount}% Diskount</p>
                                            </div>
                                        </div>
                                    </div>
                                </HoverCard>
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
