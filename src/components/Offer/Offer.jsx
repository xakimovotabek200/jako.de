import "@mantine/carousel/styles.css";
import { HoverCard, Text } from '@mantine/core';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Offer.module.css";
import { productData } from "../../components/Higtlights/data";

function Offer() {
    const [selectedColor, setSelectedColor] = useState("");
    const filteredProducts = productData.filter(item => {
        return selectedColor === "" || item.color === selectedColor;
    });

    const handleColorChange = (e) => {
        setSelectedColor(e.target.value);
    };

    return (
        <div className='container mx-auto'>
            <div className='text_hight'>
                <h1>Offer</h1>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4">
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dicta vero ex cumque commodi id similique iste sunt totam, eum quos nisi non error eos quod quam, officia fuga porro consequuntur, asperiores cum. Modi ullam quas quis quisquam rerum recusandae dolores minus ipsum repudiandae placeat? Magni, nesciunt qui corrupti impedit deserunt aliquam hic totam placeat.
                    </p>
                </div>
                <div className="col-span-2 md:col-span-3">
                    <div className="w-1/2">
                        <select name="Color" className="outline-none ml-[7pc]" id="" onChange={handleColorChange}>
                            <option value="">Color</option>
                            <option value="red">Red</option>
                            <option value="blue">Blue</option>
                            <option value="grey">Grey</option>
                            <option value="orange">Orange</option>
                        </select>
                        <div className="w-[250px] mb-5 h-[1px] bg-black" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {filteredProducts.map((item) => {
                            return (
                                <Link key={item.id} to={`/HigtlightsId/${item.id}`}>
                                    <HoverCard shadow="md" closeDelay={300}>
                                        <div className="box">
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
        </div>
    )
}

export default Offer;
