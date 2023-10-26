import { HoverCard, Text } from '@mantine/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "../Higtlights/Hightlights.css";

function Wishes() {
    const [selectedProductImage, setSelectedProductImage] = useState(null);
    const dispatch = useDispatch();

    const { products } = useSelector((state) => state.orebiReducer);


    return (
        <div className='container mx-auto'>
            <p className="text-blue-900 text-3xl font-extrabold">COLLECTION</p>
            <div>
                <div className='flex justify-center items-center'>
                    {products.map((item, index) => {
                        return (
                            <Link key={index} to={`/HigtlightsId/${item.id}`} >
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
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Wishes