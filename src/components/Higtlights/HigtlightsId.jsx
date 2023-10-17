import React from 'react';
import { useParams } from 'react-router-dom';
import { productData } from './data';
import Product from '../../pages/Home/Product';

function HightLightsId() {
    const { id } = useParams();
    const highlight = productData.find(item => item.id === parseInt(id));

    if (!highlight) {
        return <div className="">data not found</div>;
    }

    return (
        <Product highlight={highlight} />

    );
}

export default HightLightsId;
