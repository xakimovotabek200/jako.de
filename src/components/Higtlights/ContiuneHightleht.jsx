import React from 'react'

function ContiuneHightleht({ highlight }) {
    return (
        <div>
            <div className='flex items-center'>
                <h1>From{highlight.cost1}</h1>
                <div className="text-center ">
                    <del>€{highlight.costDel2}</del>
                </div>
            </div>
        </div>
    )
}

export default ContiuneHightleht