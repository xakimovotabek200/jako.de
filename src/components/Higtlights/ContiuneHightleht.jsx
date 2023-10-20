import React, { useState } from 'react'
import "./Hightlights.css"
import { Button } from '@mantine/core';


function ContiuneHightleht({ highlight }) {
    const [add, setAdd] = useState(1)

    function incre() {
        setAdd(add + 1);
    }

    function dec() {
        setAdd(add - 1);
    }

    return (
        <div>
            <div className="flex gap-6 items-center">
                <span className='price'>from €{highlight.cost1}</span>
                <h2 className="">
                    <del>€{highlight.costDel2}</del>
                </h2>
                <p className='text_diskpunt'>-{highlight.discount}% Diskount</p>
            </div>
            <div className='flex items-center'>
                <div className='flex items-center'>
                    <button className='p-4 border-2 border-solid border-[#5b5b5b]'>
                        {add}
                    </button>
                    <div>
                        <button onClick={() => incre()} className='w-[20px] border-2 border-solid border-[#5b5b5b]'>+</button>
                        <br />
                        <button onClick={() => dec()} className='w-[20px] h-[32px] border-2 border-solid border-[#5b5b5b]'>-</button>
                    </div>
                </div>
                <Button variant="filled" style={{ width: "200px", height: "65px" }} >Add to cart</Button>
            </div>
        </div>
    )
}

export default ContiuneHightleht