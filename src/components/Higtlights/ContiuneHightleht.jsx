import { Button } from '@mantine/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, drecreaseQuantity, increaseQuantity } from '../redux/slice';
import "./Hightlights.css";


function ContiuneHightleht({ highlight }) {
    const [add, setAdd] = useState(1)
    const dispatch = useDispatch()
    const { selectedSize, selectedImage } = useSelector((state) => state.orebiReducer)

    function handleAddToCart(data) {
        let newData = Object.assign({}, data)
        newData.uuid = crypto.randomUUID();
        newData.size = selectedSize;
        newData.image = selectedImage ? selectedImage : newData.image;
        return dispatch(addToCart(newData))
    }

    return (
        <div>
            <div className="flex gap-6 items-center">
                <span className='price'>from €{highlight.cost1}</span>
                <h2 className="">
                    <del>€{highlight.costDel2}</del>
                </h2>
                <p className='text_diskpunt'>-{highlight.discount}% Diskount</p>
                <p className='text_diskpunt'>tuda sudalar Diskount</p>
            </div>
            <div className='flex items-center'>
                <div className='flex items-center'>
                    <button className='p-4 border-2 border-solid border-[#5b5b5b]'>
                        {highlight.quantity}
                    </button>
                    <div>
                        <button onClick={() => dispatch(increaseQuantity())} className='w-[20px] border-2 border-solid border-[#5b5b5b] hover:bg-[#008ac9] hover:text-white'>+</button>
                        <br />
                        <button onClick={() => dispatch(drecreaseQuantity())} className='w-[20px] h-[32px] border-2 border-solid border-[#5b5b5b] hover:bg-[#008ac9] hover:text-white'>-</button>
                    </div>
                </div>
                <Button onClick={() => handleAddToCart(highlight)} variant="filled" style={{ width: "200px", height: "65px" }} >Add to cart</Button>
            </div>
        </div>
    )
}

export default ContiuneHightleht